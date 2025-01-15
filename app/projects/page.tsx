'use client';

import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
import { motion } from 'framer-motion'

function Page() {
    return (
        <>
            <Navbar />
            <div>
                <motion.div
                    className='h-screen w-full bg-black text-white flex items-center justify-center text-3xl font-semibold'
                >
                    <motion.h1
                        initial={{
                            y: -100,
                            opacity: 0
                        }}
                        animate={{
                            y: 0,
                            opacity: 1
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        Top 5 Projects from the hackathon will be listed here.
                    </motion.h1>
                </motion.div>
            </div>
        </>
    )
}

export default Page