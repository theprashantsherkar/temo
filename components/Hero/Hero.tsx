import RegisterBtn from '../RegsterBtn/RegisterBtn'
import './heroStyle.css'
import BoxReveal from '@/components/ui/box-reveal'

export default function Hero() {
    return (
        <div className="flex items-center justify-center flex-col gap-6 mx-9">
            <BoxReveal duration={0.5} boxColor='#5046e6'>
                <img src="unplugged.png" alt="logo" className="oscillatey scale-50 sm:scale-0 h-[150px]" />
            </BoxReveal>
            <BoxReveal duration={0.7} boxColor='#5046e6'>

            <div className="text-xl text-center">
                A 24 hour hardware hackathon for the tech enthusiasts all over the country.
            </div>
            </BoxReveal>
            <BoxReveal duration={1.6} boxColor='#5046e6'>
                <RegisterBtn />
            </BoxReveal>
        </div>
    )
}