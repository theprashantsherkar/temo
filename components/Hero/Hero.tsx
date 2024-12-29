import RegisterBtn from '../RegsterBtn/RegisterBtn'
import './heroStyle.css'

export default function Hero() {
    return (
        <div className="flex items-center justify-center flex-col gap-6 mx-9">
            <img src="UNPLUGGED.png" alt="logo" className="oscillatey scale-50 sm:scale-0" />
            <div className="text-xl text-center">
                A 24 hour hardware hackathon for the tech enthusiasts all over the country.
            </div>
            <RegisterBtn />
        </div>
    )
}