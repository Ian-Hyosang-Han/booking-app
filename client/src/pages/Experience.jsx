import React, { useState } from 'react'
import { assets } from "../assets/assets";
import exp1 from '../assets/exp1.webp'
import exp2 from '../assets/exp2.webp'
import exp3 from '../assets/exp3.webp'
import exp4 from '../assets/exp4.webp'
import exp5 from '../assets/exp5.webp'
import exp6 from '../assets/exp6.webp'

const Experience = () => {

    const categories = [
        'All Locations',
        'Shopping',
        'Gallery & Art',
        'Markets',
        'Museum',
    ];

    const experiences = [
        {
            img: exp1,
            title: 'ShopInn Local',
            subtitle: 'The ShopINN Local program supports small businesses in communities where we have hotels. Our guests receive exclusive incentives that in turn supports the local economy',
        },
        {
            img: exp2,
            title: 'Effusion Art Gallery',
            subtitle: 'This gallery offers a revolving roster of some of Canada most talented artists. Featuring a great range of mediums and varying contemporary designs, this is truly a place to enjoy with family or friends.',
        },
        {
            img: exp3,
            title: 'Art Tour',
            subtitle: 'Art Tour promotes local artists throughout the Mountain Region. The Tour will help maintain and support the cultural experiences of the region.',
        },
        {
            img: exp4,
            title: 'Festival',
            subtitle: 'Held every year, this festival hosts very talented music artists, along with great food, and events /playgrounds for kids. A fantastic event for the whole family, here is the perfect place to be especially during the time of the festival.',
        },
        {
            img: exp5,
            title: 'Downtown',
            subtitle: 'Packed full of local owners of shops, bakeries, and other businesses, Stony Plain is a beautifully historic and friendly place to visit and enjoy the locals welcoming smiles.',
        },
        {
            img: exp6,
            title: 'Local Market',
            subtitle: 'Located in the heart of downtown, the Mountain Market is a fantastic summer tradition worth a visit. With a huge selection of jams, fruit, meats, pastries, clothing, jewelry, artistic products, and more, it proves to be a great location to enjoy this market.',
        },
    ];

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    return (
        <div>
            <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroimage.jpg")] bg-no-repeat bg-cover bg-center min-h-screen'>
                <div className="absolute inset-0 bg-black opacity-50" />
                <div className='relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-16 lg:px-24 xl:px-32'>
                    <p className='text-md md:text-xl py-1 mt-25'>
                        Enjoy local arts, culture and shopping
                    </p>
                    <h1 className='font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold mt-2 mr-4 mb-4'>Unforgettable Experiences</h1>
                </div>
            </div>
            <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-amber-800 text-white cursor-pointer">
                {/* Desktop Nav */}
                <ul className="hidden md:flex text-xl flex-row items-center justify-center space-x-6 h-[70px]">
                    {categories.map(cat => (
                        <li key={cat} className="w-[150px] p-1 text-center">
                            {cat}
                        </li>
                    ))}
                </ul>

                {/* Mobile close button */}
                <div className="flex md:hidden justify-center py-4 flex-col items-center">
                    <button
                        onClick={() => setIsMobileNavOpen(open => !open)}
                        aria-label={isMobileNavOpen ? 'Close menu' : 'Open menu'}
                        className="flex items-center gap-2"
                    >
                        <img
                            src={isMobileNavOpen ? assets.closeIcon : assets.menuIcon}
                            alt={isMobileNavOpen ? 'close menu' : 'open menu'}
                            className="h-6 w-6"
                        />
                        <span className='text-white'>Select Location</span>
                    </button>

                    {/* Mobile Dropdown menu */}
                    {isMobileNavOpen && (
                        <ul className="mt-4 w-full bg-opacity-75 flex flex-col items-center">
                            {categories.map(cat => (
                                <li
                                    key={cat}
                                    className="w-full text-center p-3 border-b border-white text-white"
                                >
                                    {cat}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            
            <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="relative h-[400px] rounded-lg overflow-hidden">
                            <img
                                src={exp.img}
                                alt={exp.title}
                                className="object-cover w-full h-full"
                            />

                            <div className="absolute inset-0 bg-black opacity-50"></div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                                <h3 className="text-white text-2xl font-semibold">
                                    {exp.title}
                                </h3>
                                <p className="text-white text-sm mt-1">{exp.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience
