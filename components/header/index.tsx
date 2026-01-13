import Link from 'next/link'
import Image from 'next/image'
// import Button from '../button/button'
import Button from '@/components/button/button'
import Nav from './nav'
import MobileNav from './mobile-nav'
export default function Header() {
  const links = [
    { url: '/', name: 'Ballina' },
    { url: '/sherbimet', name: 'Shërbimet' },
    { url: '/kontakti', name: 'Kontakti' },
  ]
  return (
    <div className='flex justify-between items-center py-4 px-10 text-black bg-primaryGreen'>
      <div>
        <Image
          src='/assets/orl-logo-white.svg'
          alt='Clinic Logo'
          width={140}
          height={40}
        />
      </div>

      <div className='hidden md:flex w-full'>
        <Nav links={links} />
      </div>

      <div className='w-full flex md:hidden'>
        <MobileNav />
      </div>

      {/* <div className='flex items-center gap-x-4'>
        {links.map((link) => (
          <Link
            key={link.url}
            href={link.url}
            className='p-2 text-white hover:font-medium'
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div>
        <Button title='Kontakti' url='/kontakti' variant='primary' />
      </div> */}
    </div>
  )
}
