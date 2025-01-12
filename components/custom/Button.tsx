'use client'

import React from 'react'

function Button({label, handler}:ButtonProps) {
  return (
      <button onClick={handler} className="bg-blue-600 text-white font-semibold py-3 px-5 rounded-md">
          {label}
      </button>
  )
}

export default Button;


interface ButtonProps {
    label: string;
    handler: () => void;
}
