import React from 'react'
import Hero from '@/components/Hero/Hero'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'

export default function Home() {
  return (
    <div className='h-screen bg-slate-700'>
      <Navbar />
      <div className='text-white h-screen flex items-center justify-center'>
        <Hero />
      </div>
      <Footer />
    </div>
  )
}

