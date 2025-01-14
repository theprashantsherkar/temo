import React from 'react'
import { poc } from '@/app/sponsor/page'
import { HoverEffect } from '../ui/card-hover-effect'


function Contact() {
    return (
        <div className=' w-full py-10  flex flex-col items-center justify-center text-center bg-black mx-auto' id='contact'>
            <h1 className=' font-semibold text-white text-3xl'>Contact us at:</h1>
            <div className='w-3/4 mx-auto'>
                <HoverEffect items={poc} />
            </div>
            <h1 className='font-semibold text-white text-2xl'>Or Mail us at: <a href="mailto:office.djsceiete@gmail.com">office.djsceiete@gmail.com</a></h1>
        </div>
    )
}

export default Contact