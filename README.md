# FindInn

FindInn is a full-stack hotel booking web application built with React, Vite, Tailwind CSS, Express, MongoDB, Clerk, Cloudinary, and Stripe. Users can browse available rooms, view hotel details, make bookings, and manage their reservations. Hotel owners can register their hotel, add rooms, manage availability, and review booking dashboard data.

## Demo Notice

This project is prepared as a portfolio demo application. It uses a MongoDB-backed demo database and third-party services such as Clerk, Cloudinary, and Stripe in test/demo mode.

Please use the live demo only for testing. Do not enter real personal information, payment details, or production credentials.

## Features

- User Authentication: Sign in and manage sessions with Clerk.
- Room Browsing: Explore hotels, rooms, amenities, images, and location details.
- Room Filtering: Filter rooms by destination, room type, price range, and sort option.
- Booking Flow: Check room availability and create hotel bookings.
- User Dashboard: View current and previous bookings.
- Stripe Test Payment: Complete booking payment through Stripe test checkout.
- Hotel Owner Mode: Register a hotel and access an owner dashboard.
- Room Management: Add rooms with Cloudinary image uploads and manage availability.
- Responsive Layout: Optimized for desktop and mobile screens.

## Tech Stack

Frontend <br/>
<img alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white" />
<img alt="Vite" src="https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white" />
<img alt="Tailwind CSS" src="https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" />
<img alt="React Router" src="https://img.shields.io/badge/-React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white" />
<img alt="Axios" src="https://img.shields.io/badge/-Axios-5A29E4?style=flat-square&logo=axios&logoColor=white" /><br/>

Backend <br/>
<img alt="Node.js" src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white" />
<img alt="Express" src="https://img.shields.io/badge/-Express-000000?style=flat-square&logo=express&logoColor=white" />
<img alt="MongoDB" src="https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" />
<img alt="Mongoose" src="https://img.shields.io/badge/-Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white" /><br/>

Services <br/>
<img alt="Clerk" src="https://img.shields.io/badge/-Clerk-6C47FF?style=flat-square&logo=clerk&logoColor=white" />
<img alt="Cloudinary" src="https://img.shields.io/badge/-Cloudinary-3448C5?style=flat-square&logo=cloudinary&logoColor=white" />
<img alt="Stripe" src="https://img.shields.io/badge/-Stripe-635BFF?style=flat-square&logo=stripe&logoColor=white" />
<img alt="Nodemailer" src="https://img.shields.io/badge/-Nodemailer-30B980?style=flat-square&logo=gmail&logoColor=white" /><br/>

Deployment <br/>
<img alt="Vercel" src="https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel&logoColor=white" />
<img alt="MongoDB Atlas" src="https://img.shields.io/badge/-MongoDB_Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white" />

## Project Structure

```text
HotelBooking/
  client/
    src/
      assets/
      components/
      context/
      pages/
        hotelOwner/
      App.jsx
      main.jsx
    .env.example
    package.json
    vercel.json

  server/
    configs/
    controllers/
    middleware/
    models/
    routes/
    server.js
    .env.example
    package.json
    vercel.json
```

## Usage

- Browse Rooms: View available hotel rooms and featured destinations.
- Filter Rooms: Search by destination and refine results by room type, price range, and sorting.
- View Room Details: Review images, amenities, pricing, host information, and availability.
- Book a Room: Select check-in/check-out dates and create a booking.
- Pay Online: Use Stripe test checkout for demo payment.
- Manage Bookings: View your booking history from the user dashboard.
- Hotel Owner Dashboard: Register as a hotel owner, add rooms, and manage room availability.
- Logout: Sign out through Clerk and return to the public site.

## Deployment

<img alt="Vercel" src="https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel&logoColor=white" />

## Live Site

[findinn.vercel.app](https://findinn.vercel.app/)

## Repository

[GitHub Repository](https://github.com/Ian-Hyosang-Han/booking-app)

## Notes

- The live project uses demo/test service credentials.
- Stripe should be tested only with Stripe test cards.
- Environment variables are not included in the repository.
- `.env.example` files are provided for required configuration references.
- Demo data may be changed or reset during testing.