import Link from 'next/link'
import { navigation, socialLinks } from '../../data/navigation'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='bg-primaryGreen px-4 md:px-10 lg:px-24 py-24 relative grid grid-cols-1 md:grid-cols-3'>
      <div className='flex flex-col items-center w-fit md:col-span-1'>
        <Link href='/'>
          <Image
            src='/assets/orl-logo-white.svg'
            alt='Logo'
            width={150}
            height={100}
          />
        </Link>
      </div>

      <div className='col-span-2 pt-6 md:pt-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
          <div className='flex flex-col gap-y-3 w-full md:w-fit mx-auto items-start gap-x-10 text-white ml-1 md:ml-0'>
            {navigation.map((item) => (
              <Link key={item.title} href={item.url}>
                {' '}
                {item.title}
              </Link>
            ))}
          </div>
          <div className='flex flex-col justify-end text-white mt-4 sm:mt-0'>
            <div className='flex flex-col sm:w-fit sm:ml-auto gap-y-3'>
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
              <div className='flex items-center gap-x-1'>
                <Image
                  src='/assets/mail.png'
                  alt='Clinic Email'
                  width={20}
                  height={20}
                />
                <p>orlclinicdaris@gmail.com</p>
              </div>
            </div>
            <div className='flex items-center gap-x-6 mt-4 mr-auto'>
              {socialLinks.map((item) => (
                <Link key={item.title} href={item.url}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
