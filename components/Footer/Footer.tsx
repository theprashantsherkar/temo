import Link from 'next/link';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


export default function Footer() {
    return (
        <footer className="flex flex-col   items-center justify-between  bg-sky-900 text-white text-center">
            <div className='flex sm:flex-row flex-col items-start justify-between gap-4 p-7 bg-sky-950 text-white text-center'>
                <div className='w-full sm:w-1/4 flex items-center justify-start flex-col gap-3'>
                    <Link href={'https://djsceietesf.wordpress.com/'} target='blank'><h1 className='text-xl font-semibold'>DJS IETE-ISF</h1></Link>
                    <p>The IETE Students’ Forum of D. J. Sanghvi College of Engineering</p>

                </div>
                <div className='w-full  sm:w-1/4 flex items-center justify-start flex-col gap-3'>
                    <h1 className='text-xl font-semibold'>Address</h1>
                    <p>Dwarkadas J. Sanghvi College of Engineering,
                        Vile Parle West, Mumbai-400056</p>

                </div>
                <div className='w-full  sm:w-1/4 flex items-center justify-start flex-col gap-3'>
                    <h1 className='text-xl font-semibold'>Contact</h1>
                    <div>
                        <p>Utkarsh Lotiya: +91 93220 34012</p>
                        <p>Aneesh Joshi: +91 70454 91990</p>
                        <p>Samay Mehta: +91 79772 37204</p>
                    </div>
                </div>
                <div className='w-full sm:w-fit flex items-center justify-start flex-col gap-4'>
                    <h1 className='text-xl font-semibold'>Follow us on</h1>
                    <div className="flex items-center justify-center gap-3">
                        <Link href="https://www.instagram.com/djsce_iete/" className='p-3 hover:scale-110 border-2 border-white rounded-full hover:bg-black  transition-all' target="_blank" rel
                            ="noopener noreferrer">
                            <InstagramIcon />
                        </Link>
                        <Link href="https://www.linkedin.com/company/djsce-iete/posts/?feedView=all" target="_blank" rel
                            ="noopener noreferrer" className='p-3 hover:scale-110 border-2 border-white rounded-full hover:bg-black  transition-all'>
                            <LinkedInIcon />
                        </Link>
                        <a href="mailto:djsceiete2024@gmail.com" target="_blank" rel
                            ="noopener noreferrer" className='p-3 border-2 hover:scale-110 border-white rounded-full hover:bg-black transition-all'>
                            <MailOutlineIcon />
                        </a>
                    </div>
                </div>
            </div>
            <div className='p-3 text-white'>Made with ❤️ by DJS IETE</div>
        </footer>
    )
};