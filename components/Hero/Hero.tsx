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
                <div className='text-white flex flex-row items-center justify-between gap-6 w-full absolute bottom-5 px-10'>
                    {sponsorList.map((item) => (
                        <div key={item.id}>
                            <div className='text-white text-md text-center font-semibold '>{item.caption}</div>
                            <Link href={item.link
                            }
                                target='_blank' rel='noopener noreferrer'
                            >
                                <img className={item.utilityClasses} src={item.logo} alt={item.alt} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

        </ImagesSlider>
    )
};


const sponsorList:sponsors[] = [
    {
        id: 1,
        link: "",
        caption: 'Platinum Sponsor',
        logo: '/sponsors/bob.png',
        alt: 'Bank of Baroda',
        utilityClasses: "h-[70px] w-[120px] scale-150 mx-6 py-4",

    },
    {
        id: 2,
        link: "",
        caption: 'Title Sponsor',
        logo: '/sponsors/iol.jpg',
        alt: 'Iol',
        utilityClasses: "h-[70px] w-[100px] scale-150 mx-6 py-4",

    },
    {
        id: 3,
        link: "www.unstop.com",
        caption: 'Powered By',
        logo: '/sponsors/unstop2.png',
        alt: 'unstop',
        utilityClasses: "h-[70px] w-[80px] scale-150 mx-6 py-4",
    }
]



interface sponsors{
    id: number;
    link: string;
    caption: string;
    logo: string;
    alt: string;
    utilityClasses: string;
}