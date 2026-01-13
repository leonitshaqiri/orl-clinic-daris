// import Image from 'next/image'

import Image from 'next/image'
import Button from './button/button'

export default function MainSection() {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between mx-auto  pt-20 min-h-screen px-10 lg:px-4 lg:w-11/12'>
      <div className='flex flex-col gap-y-4 lg:w-1/2 xl:w-2/3 lg:pr-20 mb-10 lg:mb-0 text-center lg:text-left'>
        <h1>
          Your Dream Smile is <br /> Closer Than you Think
        </h1>
        <p>
          Experience top-quality dental care with us. Schedule your free
          consultation today!
        </p>

        <div className='flex w-auto mx-auto lg:mx-0'>
          <Button title='Rezervo tani' url='/kontakti' variant='primary' />
        </div>
      </div>
      <div className='flex justify-end lg:w-1/2 xl:w-1/3'>
        <div className='flex'>
          <Image
            className='rounded-2xl h-96 md:h-[550px]'
            alt='main'
            src='/assets/main-img.avif'
            width={500}
            height={300}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>
      </div>
    </div>
  )
}
