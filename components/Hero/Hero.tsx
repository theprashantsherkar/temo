import RegisterBtn from '../RegsterBtn/RegisterBtn'
import './heroStyle.css'

export default function Hero() {
    return (
        <div className="flex items-center justify-center flex-col gap-6">
            <img src="UNPLUGGED.png" alt="logo" className="oscillatey" />
            <div className="text-xl"    >
                A 24 hour hardware hackathon for the tech enthusiasts all over the country.
            </div>
            <RegisterBtn />
        </div>
    )
}