'use client' // 👈 only needed here since we’re adding state

import { servicesContent } from '../../data/services'
import ServicesCart from '../../components/services-section/services-cart'
import Image from 'next/image'
import { useState } from 'react'

export default function Sherbimet() {
  const [openId, setOpenId] = useState<number | null>(null)

  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id)) // close if clicked again
  }

  return (
    <div>
      <div className='relative'>
        <div className='-mt-1'>
          <Image
            alt='1'
            src='/assets/sherbimet-main-section.png'
            width={2000}
            height={300}
            objectFit='cover'
          />
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>
          <h2 className='text-center'>Shërbimet</h2>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-10 pt-20 px-24 py-20'>
        {servicesContent.map((item) => (
          <div key={item.id}>
            <ServicesCart
              key={item.id}
              data={item}
              open={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
