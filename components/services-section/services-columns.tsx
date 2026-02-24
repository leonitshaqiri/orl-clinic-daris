'use client'
import React from 'react'
import { motion } from 'motion/react'
import { servicesContent } from '@/data/services'

export const TestimonialsColumn = (props: {
  className?: string
  testimonials: typeof servicesContent
  duration?: number
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: '-50%',
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className='flex flex-col gap-6 pb-6 bg-background'
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ title, icon, description }, i) => (
                <div
                  className='p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-md w-full'
                  key={i}
                >
                  <div className='flex'>
                    <img
                      width={10}
                      height={10}
                      src={icon}
                      alt={title}
                      className='h-10 w-10 rounded-full'
                    />

                    <div className='font-medium tracking-tight leading-5'>
                      {title}
                    </div>
                  </div>

                  <div className='flex items-center gap-2 mt-5'>
                    <div className='flex flex-col'>
                      <div className='leading-5 opacity-60 tracking-tight pt-2'>
                        {description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  )
}
