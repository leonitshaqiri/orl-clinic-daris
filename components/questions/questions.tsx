'use client'
// import Image from "next/image";
import { useState } from 'react'
import Accordion from './accordion'
import { questions } from '../../data/questions'
import { motion } from 'framer-motion'

export default function Questions() {
  const [openId, setOpenId] = useState<number | null>(null)

  const handleToggle = (id: number) => {
    setOpenId((prevId) => (prevId === id ? null : id))
  }

  return (
    <div className='py-10 md:py-20 px-4 md:px-0 md:w-11/12 mx-auto'>
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
        className='text-center'
      >
        Pyetjet
      </motion.h2>

      <div className='grid md:grid-cols-2 gap-x-10 pt-10 md:pt-20 items-center'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
          className='flex flex-col gap-y-8 mb-10 md:mb-0'
        >
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
          className='bg-gray-300 rounded-3xl h-96 md:h-full w-full'
        >
          {/* <Image /> */}
        </motion.div>
      </div>
    </div>
  )
}
