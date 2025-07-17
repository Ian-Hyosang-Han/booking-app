import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'

const NewsLetter = () => {
    return (
        <div className="flex flex-col items-center max-w-5xl lg:w-full rounded-2xl px-4 py-6 md:py-16 mx-2 lg:mx-auto my-10">
            <Title title='Keep the Inspiration Flowing' subtitle='Subscribe today for insider access to upcoming destinations, limited-time offers, and travel inspiration.' />
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
                <input type="text" className="bg-white/10 px-4 py-2.5 border rounded outline-none max-w-66 w-full border-gray-300" placeholder="Enter your email" />
                <button className="flex items-center justify-center gap-2 group bg-black px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all text-white cursor-pointer">Subscribe
                    <img src={assets.arrowIcon} alt="arrow-icon" className='w-3.5 invert group-hover:translate-x-1 transition-all'/>
                </button>
            </div>
            <p className="text-gray-500 mt-6 text-xs text-center">By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
        </div>
    )
}

export default NewsLetter
