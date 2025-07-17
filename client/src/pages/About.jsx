import React from 'react'
import NewsLetter from '../components/NewsLetter';
import whoweare from '../assets/whoweare.webp'

const About = () => {
    return (
        <div className="bg-gray-50 text-gray-800">
            {/* Hero */}
            <div
                className="relative flex flex-col items-start justify-center text-white
                     h-screen px-6 md:px-16 lg:px-24 xl:px-32
                     bg-[url('/src/assets/aboutus.webp')]
                     bg-cover bg-center mt-26"
            >
                {/* <div className="absolute inset-0 bg-black opacity-50" /> */}
                <div className="relative z-10 space-y-2">
                    <p className="text-sm md:text-lg">Discover more about us</p>
                    <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-extrabold">
                        The FindInn Family
                    </h1>
                </div>
            </div>

            {/* Who We Are */}
            <section className="px-6 py-12 md:px-16 lg:px-24 xl:px-32">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                   
                    <div className="md:w-1/2">
                        <h2 className="font-playfair text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Who We Are
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed">
                            FindInn is a global accommodation-booking platform dedicated to helping travelers discover and reserve the perfect place to stay—whether it's a hidden boutique inn, a luxury villa, or anything in between. Founded in 2025, our name combines “Find” and “Inn” to reflect our commitment to uncovering the most inspiring stays around the world.
                        </p>
                    </div>

                    <div className="md:w-1/2 flex justify-center md:justify-end">
                        <img
                            src={whoweare}
                            alt="who we are"
                            className="w-full max-w-xs rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Things We Value */}
            <section className="bg-white px-6 py-12 md:px-16 lg:px-24 xl:px-32">
                <h2 className="font-playfair flex items-center justify-center text-2xl md:text-4xl lg:text-5xl font-bold mb-8">
                    Things We Value
                </h2>

                <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                    {/* Our Mission */}
                    <div>
                        <h3 className="font-playfair text-xl md:text-2xl font-semibold mb-2">
                            Our Mission
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed">
                            To empower every traveler with a seamless, intuitive search and booking experience, so that planning a trip feels as exciting as the journey itself.
                        </p>
                    </div>

                    {/* Our Vision */}
                    <div>
                        <h3 className="font-playfair text-xl md:text-2xl font-semibold mb-2">
                            Our Vision
                        </h3>
                        <p className="text-base md:text-lg leading-relaxed">
                            To become the most trusted source of accommodation information—backed by real guest reviews and transparent ratings—so that booking a room isn't just a transaction but the start of an unforgettable adventure.
                        </p>
                    </div>
                </div>

                {/* Core Values */}
                <div className="mt-12">
                    <h3 className="font-playfair text-xl md:text-2xl font-semibold mb-4">
                        Our Core Values
                    </h3>
                    <ul className="space-y-4 md:space-y-6">
                        <li>
                            <strong>Honesty &amp; Transparency:</strong> We surface genuine guest feedback and never manipulate reviews or ratings.
                        </li>
                        <li>
                            <strong>User-First Experience:</strong> From mobile to desktop, we optimize every interaction to make finding and booking a room effortless.
                        </li>
                        <li>
                            <strong>Continuous Innovation:</strong> We constantly explore new technologies—AI-driven recommendations, 24/7 customer support, and more—to elevate your travel planning.
                        </li>
                    </ul>
                </div>
            </section>

            {/* Our Team */}
            <section className="px-6 py-12 md:px-16 lg:px-24 xl:px-32">
                <h2 className="font-playfair flex items-center justify-center text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                    Our Team
                </h2>
                <p className="text-base md:text-lg leading-relaxed">
                    A diverse group of hospitality developers, UX/UI designers, data analysts, and support specialists who collaborate every day to turn your feedback into real improvements. At FindInn, every feature begins with your voice.
                    With FindInn, the next time you plan a getaway, you will spend less time searching and more time looking forward to your stay. Start exploring today!
                </p>
            </section>
            <NewsLetter />
        </div>
    );
};

export default About;
