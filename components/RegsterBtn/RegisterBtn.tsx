import React from 'react'
import './style.css'
import Link from 'next/link';

function RegisterBtn() {
  return (
      <Link href={'https://unstop.com/p/unplugged-20-a-24-hour-hardware-hackathon-shri-vile-parle-kelavani-mandals-dwarkadas-j-sanghvi-college-of-engineering--1312122'}>
          <button className="button" data-text="Awesome">
              <span className="actual-text">&nbsp;Register&nbsp;</span>
              <span aria-hidden="true" className="hover-text">&nbsp;Register&nbsp;</span>
          </button>
      </Link>
  )
}

export default RegisterBtn;