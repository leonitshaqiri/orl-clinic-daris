'use client'
// import Image from "next/image";
import { useState } from 'react'
import Accordion from './accordion'
import { questions } from '../../data/questions'

export default function Questions() {
  const [openId, setOpenId] = useState<number | null>(null)

  const handleToggle = (id: number) => {
    setOpenId((prevId) => (prevId === id ? null : id))
  }

  return (
    <div className='py-20 w-11/12 mx-auto'>
      <h2 className='text-center'>Pyetjet</h2>

      <div className='grid md:grid-cols-2 gap-x-10 pt-20 items-center'>
        <div className='flex flex-col gap-y-8 mb-10 md:mb-0'>
          {questions.map((item) => (
            <Accordion
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openId === item.id}
              onToggle={handleToggle}
            />
          ))}
        </div>
        <div className='bg-gray-300 rounded-3xl h-96 md:h-full w-full'>
          {/* <Image /> */}
        </div>
      </div>
    </div>
  )
}
