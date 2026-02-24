'use client' // 👈 only needed here since we’re adding state

import { servicesContent } from '../../data/services'
// import ServicesCart from '../../components/services-section/services-cart'
// import Image from 'next/image'
import { TestimonialsColumn } from '@/components/services-section/services-columns'
import { motion } from 'motion/react'
export default function Sherbimet() {
  // const [openId, setOpenId] = useState<number | null>(null)

  // const handleToggle = (id: number) => {
  //   setOpenId((prev) => (prev === id ? null : id)) // close if clicked again
  // }

  const firstColumn = servicesContent.slice(0, 3)
  const secondColumn = servicesContent.slice(3, 6)
  const thirdColumn = servicesContent.slice(6, 9)

  return (
    <div>
      {/* <div className='relative'>
        <div className='-mt-1'>
          <Image
            alt='1'
            src='/assets/sherbimet-main-section.png'
            width={2000}
            height={300}
            className='object-center'
          />
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>
          <h2 className='text-center'>Shërbimet</h2>
        </div>
      </div> */}

      <div className=' gap-10 pt-20 px-24 py-20'>
        {/* {servicesContent.map((item) => (
          <div key={item.id}>
            <ServicesCart
              key={item.id}
              data={item}
              open={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          </div>
        ))} */}

        <div className='container z-10 mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className='flex flex-col items-center justify-center mx-auto w-full'
          >
            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5'>
              Sherbimet
            </h2>
            <p className='text-center mt-5 opacity-75'>
              Shiko disa nga sherbimet tona kryesore qe ofrojme për biznesin
              tuaj.
            </p>
          </motion.div>

          <div className='flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden'>
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn
              testimonials={secondColumn}
              className='hidden md:block'
              duration={19}
            />
            <TestimonialsColumn
              testimonials={thirdColumn}
              className='hidden lg:block'
              duration={17}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
