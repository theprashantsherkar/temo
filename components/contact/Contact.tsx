import React from 'react'
import { pocProps } from '@/app/sponsor/page'
import { HoverEffect } from '../ui/card-hover-effect'


function Contact() {
    return (
        <div className=' w-full py-10  flex flex-col items-center justify-center text-center bg-black mx-auto' id='contact'>
            <h1 className=' font-semibold text-white text-3xl'>Contact us at:</h1>
            <div className='w-3/4 mx-auto'>
                <HoverEffect items={ContactUsPoc} />
            </div>
            <h1 className='font-semibold text-white text-2xl'>Or Mail us at: <a href="mailto:office.djsceiete@gmail.com">office.djsceiete@gmail.com</a></h1>
        </div>
    )
}

export default Contact


const ContactUsPoc: pocProps[] = [{
    id: 1,
    name: "Samay Mehta",
    position: "VCP-Technical",
    contact: "+91 79772 37204",
}, {
    id: 2,
    name: "Aneesh Joshi",
    position: "VCP-Admin",
    contact: "+91 70454 91990"
}, {
    id: 3,
    name: "Utkarsh Joshi",
    position: "Chairperson",
    contact: "+91 82912 39229"

}]
