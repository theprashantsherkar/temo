
import React from 'react'
import Hero from '@/components/Hero/Hero'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Prizepool from '@/components/Prizepool/Prizepool'
import Faq from '@/components/FAQ/Faq'
// import Timeline from '@/components/Timeline/TimelineDemo'
import TimelineDemo from  '@/components/Timeline/TimelineDemo'
import Sponsors from '@/components/sponsors/Sponsors'
import Contact from '@/components/contact/Contact'
// import LastYearAtUnplugged from '@/components/carousel/CarouselDemo';



export default function Home() {

  return (
    <div className=' bg-black '>
      <Navbar />
     <Hero/>
      <Sponsors />
      <TimelineDemo />
      <Prizepool />
      <Faq />
      <Contact/>
      <Footer />
      {/* <LastYearAtUnplugged /> */}
    </div>
  )
}

