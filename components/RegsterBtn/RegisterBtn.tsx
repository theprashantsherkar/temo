import React from 'react'
import './style.css'
import Link from 'next/link';

function RegisterBtn() {
  return (
      <Link href={'https://unstop.com/'}>
          <button className="button" data-text="Awesome">
              <span className="actual-text">&nbsp;Register&nbsp;</span>
              <span aria-hidden="true" className="hover-text">&nbsp;Register&nbsp;</span>
          </button>
      </Link>
  )
}

export default RegisterBtn;