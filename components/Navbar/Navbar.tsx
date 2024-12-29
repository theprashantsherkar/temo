'use client';

import React, { useState } from 'react'
// import Link from 'next/link';


function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav>
            <div className='sm:w-full sm:px-10 hidden  sm:fixed sm:z-10 sm: bg-black sm:bg-opacity-50  sm:text-white sm:flex sm:items-center sm:justify-between '>
                <div>
                    <a href={'https://djsceietesf.wordpress.com'}
                        target='_blank' rel='noopener noreferrer'
                    >
                        <img className='h-[100px] w-[100px] scale-150 ml-6' src="logo.png" alt="" />
                    </a>
                </div>
                <div className='flex items-center j ustify-center gap-6'>
                    <a href='#timeline' className='text-lg font-semibold'>Timeline</a>
                    <a href='#prizepool' className='text-lg font-semibold'>Prizepool</a>
                    <a href='#faq' className='text-lg font-semibold'>FAQs</a>
                    <a href='#contact' className='text-lg font-semibold'>Contact Us</a>
                    <a href='https://djsceietesf.wordpress.com' className='text-lg font-semibold'>About Us</a>
                    <a href='#' className='text-lg font-bold'>Projects</a>
                </div>

            </div>
            <div>
                <div className='sm:hidden  w-full flex items-center justify-between bg-black bg-opacity-50 text-white'>
                    <div>
                        <a href={'https://djsceietesf.wordpress.com'}
                            target='_blank' rel='noopener noreferrer'
                        >
                            <img className='h-[100px] w-[100px] scale-150 ml-6' src="logo.png" alt="" />
                        </a>
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
                <div className={`${isOpen ? 'block fixed w-full' : 'hidden'} sm:hidden bg-black bg-opacity-50 text-white`}>
                    <div className='flex flex-col items-center justify-center gap-6'>
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
    )
}

export default Navbar;
