'use client';
import React from 'react'
import Link from 'next/link';

function Navbar() {
  return (
      <div className='w-full px-10  fixed z-10  bg-black bg-opacity-50  text-white flex items-center justify-between '>
          <div>
              <Link href={'https://djsceietesf.wordpress.com'}
                  target='_blank' rel='noopener noreferrer'
              >
                  <img className='h-[100px] w-[100px] scale-150 ml-6' src="logo.png" alt="" />
              </Link>
          </div>
          <div className='flex items-center justify-center gap-6'>
              <a href='#' className='text-lg font-semibold'>Timeline</a>
              <a href='#' className='text-lg font-semibold'>Prizepool</a>
              <a href='#' className='text-lg font-semibold'>FAQs</a>
              <a href='#' className='text-lg font-semibold'>Contact Us</a>
              <a href='https://djsceietesf.wordpress.com' className='text-lg font-semibold'>About Us</a>
              <a href='#' className='text-lg font-bold'>Projects</a>
          </div>
      </div>
  )
}

export default Navbar;

// import { useState } from "react";
// import Link from "next/link";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <nav className="bg-black bg-opacity-50 fixed w-full z-10">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between h-16 items-center">
//                     {/* Logo */}
//                     <div className="flex-shrink-0">
//                         <Link href="/">
//                             <div className="text-white text-xl font-bold">MyLogo</div>
//                         </Link>
//                     </div>

//                     {/* Hamburger Menu Button */}
//                     <div className="md:hidden">
//                         <button
//                             onClick={() => setIsOpen(!isOpen)}
//                             className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
//                         >
//                             <svg
//                                 className="h-6 w-6"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                             >
//                                 {isOpen ? (
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M6 18L18 6M6 6l12 12"
//                                     />
//                                 ) : (
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M4 6h16M4 12h16M4 18h16"
//                                     />
//                                 )}
//                             </svg>
//                         </button>
//                     </div>

//                     {/* Links */}
//                     <div
//                         className={`${isOpen ? "block" : "hidden"
//                             } md:flex md:items-center md:space-x-6`}
//                     >
//                         <Link href="/">
//                             <div className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">
//                                 Home
//                             </div>
//                         </Link>
//                         <Link href="/about">
//                             <div className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">
//                                 About
//                             </div>
//                         </Link>
//                         <Link href="/services">
//                             <div className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">
//                                 Services
//                             </div>
//                         </Link>
//                         <Link href="/contact">
//                             <div className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-sm font-medium">
//                                 Contact
//                             </div>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
