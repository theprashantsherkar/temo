import RegisterBtn from '../RegsterBtn/RegisterBtn'
import './heroStyle.css'
import BoxReveal from '@/components/ui/box-reveal'
import Image from 'next/image'

export default function Hero() {
    return (
        <div className="flex items-center justify-center flex-col gap-6 mx-9">
            <BoxReveal duration={0.5} boxColor='#5046e6'>
                <Image src="/unplugged.png" alt="logo" className="oscillatey scale-50 h-[150px]" width={750} height={150} />
            </BoxReveal>
            <BoxReveal duration={0.7} boxColor='#5046e6'>

            <div className="text-xl text-center">
                A 24 hour hardware hackathon for the tech enthusiasts all over the country.
            </div>
            </BoxReveal>
            <BoxReveal duration={0.9} boxColor='#5046e6'>
                <RegisterBtn />
            </BoxReveal>
        </div>
    )
}