
import Sponsors from '@/components/sponsors/Sponsors';
import React from 'react'
import RetroGrid from '@/components/ui/retro-grid';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import Image from 'next/image';
import Link from 'next/link';


function Page() {
    return (
        <>
            <div className='fixed w-full bg-black flex items-center justify-center gap-8 z-50 p-5    '>
                <Link href={'https://djsunplugged.vercel.app'} className='flex items-center justify-center gap-9'>
                    <Image src={'/logo.png'} alt='IETE-ISF' width={200} height={150} />
                    <Image src={'/UNPLUGGED.png'} alt='IETE-ISF' width={250} height={200} className='scale-125' />
                </Link>
            </div>
            <div className='h-[130vh] gap-8 bg-black text-white flex flex-col items-center  justify-center'>
                <h1 className='text-3xl font-semibold '>Sponsor <span className='text-sky-300'>UNPLUGGED 2.0</span> </h1>
                <div className=' w-2/3 flex flex-col items-center justify-center text-center' >
                    <h1 className='text-xl font-semibold'>What is <span className='text-sky-300'>UNPLUGGED 2.0?</span></h1>
                    <p className='text-justify font-semibold'>
                        <span className='text-sky-300'>UNPLUGGED 2.0</span> is a unique 24-hour hardware hackathon by the IETE-ISF of Dwarkadas J. Sanghvi College of Engineering. This flagship event challenges aspiring engineers to solve real-world problems through innovation, critical thinking, and teamwork, turning ideas into impactful solutions.
                    </p>
                </div>

                <div className=' w-2/3 flex flex-col items-center justify-center text-center'>
                    <h1 className='text-xl font-semibold'> Where and When Does It Happen?</h1>
                    <p className='text-justify font-semibold'>
                        <span className='text-sky-300'>UNPLUGGED 2.0</span> will be held on the campus of Dwarkadas J. Sanghvi College of Engineering, located in Mumbai, on the 8th and 9th of March 2025. Over 24 hours, participants will work in a dynamic and immersive environment, engaging in hands-on problem-solving and showcasing their prototypes to a panel of esteemed judges.
                    </p>

                </div>
                <div className=' w-2/3 flex flex-col items-center justify-center text-center'>
                    <h1 className='text-xl font-semibold'>Event Highlights and Opportunities for Sponsors</h1>
                    <p className='text-justify font-semibold'>
                        Sponsoring <span className='text-sky-300'>UNPLUGGED 2.0</span> provides unmatched opportunities to connect with top engineering talent. As a sponsor, your brand gains direct exposure to some of the brightest minds in technology, with the chance to showcase your products, engage with tech-savvy participants, and explore recruitment prospects. This event also allows your organization to strengthen its brand visibility, position itself as a leader in fostering innovation, and build meaningful connections with future industry leaders.
                    </p>
                </div>
                <RetroGrid />
            </div>
            <div className=' w-full py-10  flex flex-col items-center justify-center text-center bg-black mx-auto'>
                <h1 className=' font-semibold text-white text-3xl'>Contact us at:</h1>
                <div className='w-3/4 mx-auto'>
                    <HoverEffect items={poc} />
                </div>
                <h1 className='font-semibold text-white text-2xl'>Or Mail us at: <a href="mailto:office.djsceiete@gmail.com">office.djsceiete@gmail.com</a></h1>
            </div>
            <Sponsors />
        </>
    )
}

export default Page;


const poc: pocProps[] = [{
    name: "Utkarsh Lotiya",
    position: "Chairperson",
    contact: "+91 93220 34012",
    email: "utkarshlotiya@gmail.com",
}, {
    name: "Aneesh Joshi",
    position: "Vice Chairperson",
    contact: "+91 70454 91990",
    email: "aneeshjpshi@gmail.com",
}, {
    name: "Nandini Mandekar",
    position: "Head of Marketing",
    contact: "+91 82912 39229",
    email: "",

}]

interface pocProps {
    id?: number;
    name: string;
    position: string;
    contact: string;
    email: string;
}