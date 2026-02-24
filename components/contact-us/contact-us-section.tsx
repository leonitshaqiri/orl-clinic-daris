import Image from 'next/image'
import Link from 'next/link'

export default function ContactUsSection() {
  return (
    <div className='md:w-11/12 mx-4 md:mx-auto grid md:grid-cols-2 gap-x-10 px-4 md:px-10 xl:px-24 py-5 md:py-10 lg:py-12 border border-gray-400 rounded-4xl mt-20 mb-32'>
      <div className='flex flex-col justify-center items-center md:items-start gap-y-6 text-center md:text-left mb-10 md:mb-0'>
        <h2 className='text-2xl font-bold'>
          Ndrysho pamjen, rrit vetëbesimin!
        </h2>
        <Link
          href='/kontakti'
          className='bg-primaryGreen hover:bg-secondaryGreen hover:scale-105 text-white rounded-2xl py-2 px-6 mx-auto md:mx-0'
        >
          Na kontaktoni
        </Link>
      </div>

      <div className='w-full rounded-4xl'>
        <Image
          className='rounded-4xl  object-cover w-full h-[400px]'
          alt='nose'
          src='/assets/nose-profile.avif'
          width={600}
          height={400}
        />
      </div>
    </div>
  )
}
