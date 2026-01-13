'use client'
import Image from 'next/image'

type ServicesCartProps = {
  data: {
    id: number
    icon: string
    title: string
    description: string
  }
  open?: boolean
  onToggle?: () => void
  hasImage?: boolean
}

export default function ServicesCart({
  data: { title, description, icon },
  open,
  onToggle,
  hasImage,
}: ServicesCartProps) {
  return (
    <div
      onClick={onToggle}
      className='hover:scale-105 transition-transform duration-300 rounded-2xl border border-gray-400 cursor-pointer'
    >
      <div className={`${hasImage ? 'px-0 py-0' : 'px-3 py-4'}`}>
        {hasImage && (
          <div>
            <Image
              alt='image'
              src='/assets/ear-main.jpg'
              width={400}
              height={300}
              className='w-full h-48 object-cover rounded-t-xl mb-4'
            />
          </div>
        )}
        <div
          className={`${
            hasImage
              ? 'pb-4 px-3 justify-center items-center'
              : 'pb-0 items-start'
          } flex gap-x-2`}
        >
          <Image
            className='pt-1'
            alt={title}
            src={icon}
            width={30}
            height={30}
          />
          <h4>{title}</h4>
        </div>

        {open && <p className='pl-9 text-xs'>{description}</p>}
      </div>
    </div>
  )
}
