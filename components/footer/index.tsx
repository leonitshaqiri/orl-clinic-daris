import Link from 'next/link'
import { navigation, socialLinks } from '../../data/navigation'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='bg-primaryGreen px-10 md:px-24 py-24 relative grid md:grid-cols-3'>
      <div className='flex flex-col items-center w-fit col-span-1'>
        <Image
          src='/assets/orl-logo-white.svg'
          alt='Logo'
          width={150}
          height={100}
        />
        <div className='flex items-center gap-x-6 mt-6'>
          {socialLinks.map((item) => (
            <Link key={item.title} href={item.url}>
              <Image src={item.image} alt={item.title} width={24} height={24} />
            </Link>
          ))}
        </div>
      </div>

      <div className='col-span-2'>
        <div className='grid grid-cols-2'>
          <div className='flex flex-col gap-y-3 w-fit mx-auto items-start gap-x-10 text-white'>
            {navigation.map((item) => (
              <Link key={item.title} href={item.url}>
                {' '}
                {item.title}
              </Link>
            ))}
          </div>
          <div className='flex flex-col justify-end gap-y-3 text-white'>
            <div className='w-fit ml-auto'>
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
          </div>
        </div>
      </div>
    </div>
  )
}
