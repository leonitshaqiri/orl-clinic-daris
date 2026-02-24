'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ComeAndVisit() {
  return (
    <div className='px-4 md:px-0 md:w-11/12 mx-auto my-20'>
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
        className='text-center pb-10'
      >
        Ejani na vizitoni
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.3 }}
        className='relative w-full h-[700px] rounded-4xl rounded-bl-none overflow-hidden'
      >
        <Image
          src='/assets/01-orl.png'
          alt='Come and Visit'
          fill
          className='object-cover'
          objectPosition='top'
        />
        <div className='absolute bottom-0 left-0 bg-primaryGreen bg-opacity-50 p-10 rounded-tr-4xl text-white'>
          <div className='flex flex-col md:flex-row gap-y-5 gap-x-10'>
            <div className='flex items-center gap-x-1'>
              <Image
                src='/assets/location.png'
                alt='Clinic Location'
                width={20}
                height={20}
              />
              <p>Rruga Mulla Idrizi, Kompleksi banesor ‘’Fitorja’’</p>
            </div>
            <div className='flex items-center gap-x-1'>
              <Image
                src='/assets/phone.png'
                alt='Clinic Phone'
                width={20}
                height={20}
              />
              <p>+383 44 471 055</p>
            </div>
          </div>
          <div className='flex items-center gap-x-1 pt-5 md:pt-14'>
            <Image
              src='/assets/mail.png'
              alt='Clinic Email'
              width={20}
              height={20}
            />
            <p>orlclinicdaris@gmail.com</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
