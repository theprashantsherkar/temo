'use client';

import React, { useState } from 'react'

function AnswerOfFaq({ question, answer }: FaqType) {
    const [show, setShow] = useState(false);
    return (
        <div className='flex flex-col items-center justify-center text-white overflow-hidden p-5 text-xl gap-4'>
            <div className='flex  items-center  border-b-2 border-b-green-600  rounded-xl px-4 py-2 justify-center flex-row hover:cursor-pointer' onClick={() => setShow(!show)}>
                {question}
            </div>
            {show ? <div onClick={() => setShow(!show)} className='overflow-hidden text-green-600 hover:cursor-pointer text-center flex items-center justify-center'>
                {answer}
            </div> : <></>}
        </div>
    )
}

export default AnswerOfFaq

type FaqType = {
    question: string,
    answer: string,
}