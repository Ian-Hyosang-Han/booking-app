import Stripe from "stripe";
import Booking from "../models/Booking.js";

export const stripeWebhooks = async (req, res) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    let event;
  
    // 1) 웹훅 시그니처 검증 실패 시 반드시 함수 종료
    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        req.headers["stripe-signature"],
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }
  
    // 2) 결제 완료 이벤트는 checkout.session.completed
    if (event.type === "checkout.session.completed") {
      // 이벤트 객체 자체가 Checkout Session 이므로 metadata를 바로 꺼냄
      const session = event.data.object;
      const bookingId = session.metadata.bookingId;
  
      await Booking.findByIdAndUpdate(bookingId, {
        isPaid: true,
        paymentMethod: "Stripe",
      });
      console.log(`🔔 Booking ${bookingId} marked as paid`);
    } else {
      console.log("Unhandled event type:", event.type);
    }
  
    return res.json({ received: true });
  };

// API to handle Stripe Webhooks

// export const stripeWebhooks = async ( request, response ) => {
//     // Stripe Gateway Initialize 
//     const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);
//     const sig = request.headers['stripe-signature'];
//     let event;

//     try {
//         event = stripeInstance.webhooks.constructEvent(request.body, sig, process.env.STRIPE_WEBHOOK_SECRET)
//     } catch (err) {
//         response.status(400).send(`webhook Error: ${err.message}`)
//     }

//     // Handle the event
//     if(event.type === "payment_intent.succeeded"){
//         const paymentIntent = event.data.object;
//         const paymentIntentId = paymentIntent.id;

//         // Getting Session Metadata
//         const session = await stripeInstance.checkout.sessions.list({
//             payment_intent: paymentIntentId,
//         });

//         const { bookingId } = session.data[0].metadata;

//         // Mark Payment as Paid
//         await Booking.findByIdAndUpdate(bookingId, {isPaid: true, paymentMethod: "Stripe"})
//     }else{
//         console.log("Unhandled event type : ", event.type)
//     }
//     response.json({ received: true })
// }
