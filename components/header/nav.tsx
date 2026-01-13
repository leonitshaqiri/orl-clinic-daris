import Link from 'next/link'
import Button from '@/components/button/button'

type NavProps = {
  links: { url: string; name: string }[]
}

export default function Nav({ links }: NavProps) {
  return (
    <div className='w-full flex justify-between items-center'>
      <div className='flex items-center gap-x-4 mx-auto'>
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
      </div>
    </div>
  )
}
