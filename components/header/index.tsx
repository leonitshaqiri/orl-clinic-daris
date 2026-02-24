import Image from 'next/image'
import Nav from './nav'
import MobileNav from './mobile-nav'
import Link from 'next/link'
export default function Header() {
  const links = [
    { url: '/', name: 'Ballina' },
    { url: '/sherbimet', name: 'Shërbimet' },
    { url: '/kontakti', name: 'Kontakti' },
  ]
  return (
    <div className='flex justify-between items-center py-4 px-4 md:px-10 text-black bg-primaryGreen'>
      <div>
        <Link href='/'>
          <Image
            src='/assets/orl-logo-white.svg'
            alt='Clinic Logo'
            width={140}
            height={40}
          />
        </Link>
      </div>

      <div className='hidden sm:flex w-full'>
        <Nav links={links} />
      </div>

      <div className='w-full flex justify-end sm:hidden'>
        <MobileNav links={links} />
      </div>
    </div>
  )
}
