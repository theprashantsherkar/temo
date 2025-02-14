'use client'

import React from 'react'

function Button({label, handler, isDisabled}:ButtonProps) {
  return (
      <button onClick={handler} disabled={isDisabled} className={`bg-blue-600 text-white font-semibold py-3 px-5 rounded-md ${isDisabled?`cursor-not-allowed`:`cursor-pointer`}`}>
          {label}
      </button>
  )
}

export default Button;


interface ButtonProps {
    isDisabled?:boolean
    label: string;
    handler: () => void;
}
