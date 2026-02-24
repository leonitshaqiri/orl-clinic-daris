'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function MobileNav({
  links,
}: {
  links: { url: string; name: string }[]
}) {
  const [isOpen, setIsOpen] = useState(false)

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <div>
      <div onClick={() => setIsOpen(true)}>
        <Image
          alt='hamburger menu'
          src='/assets/hamburger.png'
          width={24}
          height={24}
        />
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-primaryGreen z-10
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div
          className='flex justify-end px-4 pt-4'
          onClick={() => setIsOpen(false)}
        >
          <Image
            alt='close menu'
            src='/assets/close.png'
            width={24}
            height={24}
          />
        </div>

        <div>
          {links.map((link) => (
            <div key={link.url} className='p-4 text-white'>
              <a href={link.url} onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
