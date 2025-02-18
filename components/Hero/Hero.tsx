'use client';

import './heroStyle.css'
import BoxReveal from '@/components/ui/box-reveal'
import '../../app/globals.css'
import { ImagesSlider } from '../ui/images-slider'
import Link from 'next/link';
import { InteractiveHoverButton } from '../magicui/interactive-hover-button';


export default function Hero() {

    const images = [
        "/heroBg.jpg",
        "/timelinebg3.jpg",
        "/heroBg3.jpg",
    ]
    return (
        <ImagesSlider images={images} className='h-screen'>
            <div className="flex items-center justify-center flex-col gap-6 z-50 w-full h-screen " >
                <BoxReveal duration={0.5} boxColor='#5046e6'>
                    <img alt="logo" className="oscillatey scale-50 sm:h-[150px] " src="UNPLUGGED.png" />
                </BoxReveal>
                <BoxReveal duration={0.7} boxColor='#5046e6'>
                    <div className="text-xl text-center text-white font-semibold">
                        A 24-Hour Hardware Hackathon for tech enthusiasts across the country.
                    </div>
                </BoxReveal>
                <BoxReveal duration={0.7} boxColor='#5046e6'>
                    <InteractiveHoverButton>
                        <Link href={"/Shortlisted Teams for UnPlugged 2.0 Round 2.pdf"} target='blank'>Round 1 Results</Link>
                  </InteractiveHoverButton>
                </BoxReveal>
            </div>

        </ImagesSlider>
    )
}