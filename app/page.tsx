
import React from 'react'
import Hero from '@/components/Hero/Hero'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Prizepool from '@/components/Prizepool/Prizepool'
import Faq from '@/components/FAQ/Faq'
// import Timeline from '@/components/Timeline/TimelineDemo'
import TimelineDemo from '@/components/Timeline/TimelineDemo'



export default function Home() {

  return (
    <div className='h-screen bg-slate-700 '>
      <Navbar />
      <div className='text-white h-screen flex items-center justify-center'>
        <Hero />
      </div>
      <TimelineDemo/>
      <Prizepool />
      <Faq />
      <Footer />
    </div>


  )
}

