'use client'
import ServicesCart from './services-cart'
import { servicesContent } from '../../data/services'
import Button from '../button/button'
import { motion } from 'framer-motion'

export default function Services() {
  return (
    <div className='py-14 bg-[#F8F8F8] mt-16'>
      <div className='px-4 md:px-0 md:w-11/12 mx-auto'>
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
          className='text-center'
        >
          Shërbimet
        </motion.h2>
        <div className='grid md:grid-cols-3 gap-10 pt-10 md:pt-20'>
          {servicesContent.slice(0, 3).map((item, index) => {
            let initial = {}
            if (index === 0) initial = { x: -80, opacity: 0 }
            if (index === 1) initial = { y: 80, opacity: 0 }
            if (index === 2) initial = { x: 80, opacity: 0 }
            return (
              <motion.div
                key={item.id}
                initial={initial}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                exit={initial}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <ServicesCart key={item.id} data={item} hasImage />
              </motion.div>
            )
          })}
        </div>
        <div className='flex w-full justify-center pt-10 md:pt-20'>
          <Button
            variant='primary'
            title='Shiko te gjitha shërbimet'
            url='/sherbimet'
          />
        </div>
      </div>
    </div>
  )
}
