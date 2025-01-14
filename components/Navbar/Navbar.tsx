'use client';

import React, { useState } from 'react';
import Link from 'next/link';


function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <div className='sm:w-full sm:px-10 hidden  sm:fixed sm:z-50 sm: bg-black sm:bg-opacity-50  sm:text-white sm:flex sm:items-center sm:justify-between '>
                <div className='flex items-center justify-between gap-6'>
                    {logos.map((item) => (
                        <div key={item.id}>
                            <Link href={item.link}
                                target='_blank' rel='noopener noreferrer'
                            >
                                <img className={item.utilityClasses} src={item.logo} alt={item.alt} />
                            </Link>
                        </div>
                    ))}
                </div>
                <div className='flex items-center j ustify-center gap-6'>
                    <a href='#timeline' className='text-lg font-semibold hover:text-sky-400 hover:translate-x-2 transition-all'>Timeline</a>
                    <a href='#prizepool' className='text-lg font-semibold hover:text-sky-400 hover:translate-x-2 transition-all'>Prizepool</a>
                    <a href='#faq' className='text-lg font-semibold hover:text-sky-400 hover:translate-x-2 transition-all'>FAQs</a>
                    <a href='#contact' className='text-lg font-semibold hover:text-sky-400 hover:translate-x-2 transition-all'>Contact Us</a>
                    <a href='https://djsceietesf.wordpress.com' className='text-lg font-semibold hover:text-sky-400 hover:translate-x-2 transition-all'>About Us</a>
                    <a href='#' className='text-lg font-bold hover:text-sky-400 hover:translate-x-2 transition-all'>Projects</a>
                </div>
            </div>
            <div>
                <div className='sm:hidden  w-full flex items-center justify-between bg-black bg-opacity-50 text-white'>
                    <div className='w-fit-content flex items-center justify-center gap-6'>
                        {/* kb */}
                        {logos.map((item) => (
                            <div key={item.id}>
                                <Link href={item.link}
                                    target='_blank' rel='noopener noreferrer'
                                >
                                    <img className={item.utilityClasses} src={item.logo} alt={item.alt} />
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div>
                        <button onClick={() => setIsOpen(!isOpen)} className='focus:outline-none'>
                            <svg className='h-6 w-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={`${isOpen ? 'block absolute w-full z-50' : 'hidden'} sm:hidden bg-black  text-white py-8`}>
                    <div className='flex flex-col items-center justify-center gap-8'>
                        <a href='#timeline' className='text-lg font-semibold'>Timeline</a>
                        <a href='#prizepool' className='text-lg font-semibold'>Prizepool</a>
                        <a href='#faq' className='text-lg font-semibold'>FAQs</a>
                        <a href='#contact' className='text-lg font-semibold'>Contact Us</a>
                        <a href='https://djsceietesf.wordpress.com' className='text-lg font-semibold'>About Us</a>
                        <a href='#' className='text-lg font-bold'>Projects</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


const logos: logoProps[] = [{
    id: 3,
    link: "",
    logo: '/svkm.png',
    alt: 'SVKM',
    utilityClasses: "h-[70px] w-[70px] hidden sm:block"
},
{
    id: 1,
    link: "https://djsceietesf.wordpress.com",
    logo: '/logo.png',
    alt: 'DJS IETE-ISF',
    utilityClasses: "h-[90px] w-[110px] scale-150 ml-6 py-4"
},
{
    id: 2,
    link: "https://djsce.ac.in",
    logo: "/djsce.png",
    alt: 'DJSCE',
    utilityClasses: "h-[70px] w-[70px] ml-6 hidden sm:block"
}
];


interface logoProps {
    id: number;
    link: string;
    logo: string;
    alt: string;
    utilityClasses: string;
}