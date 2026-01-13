import Link from 'next/link'
import clsx from 'classnames'

type ButtonProps = {
  url: string
  title: string
  variant: 'primary' | 'secondary'
}

export default function Button({
  url,
  title,
  variant = 'primary',
}: ButtonProps) {
  const baseClasses = 'px-10 py-2 rounded-4xl border'
  const variantClasses: Record<'primary' | 'secondary', string> = {
    primary:
      'bg-primaryGreen text-white hover:bg-secondaryGreen hover:text-white hover:scale-105 transition-transform duration-300',
    secondary:
      'bg-black text-white border-black hover:bg-white hover:text-black hover:scale-105 transition-transform duration-300',
  }

  return (
    <Link className={clsx(baseClasses, variantClasses[variant])} href={url}>
      {title}
    </Link>
  )
}
