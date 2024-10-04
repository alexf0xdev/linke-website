import { cn } from '@/lib/utils'
import Link from 'next/link'
import { FC, ReactNode } from 'react'

interface IButton {
  variant?: 'primary' | 'secondary' | 'error'
  size?: 'base' | 'small'
  fullSize?: boolean
  href?: string
  className?: string
  type?: 'submit' | 'button' | 'reset'
  disabled?: boolean
  onClick?: () => void
  children: ReactNode
}

const variants = {
  primary: 'bg-cyan-600 disabled:bg-cyan-600/20 text-white',
  secondary: 'bg-zinc-200 dark:bg-zinc-800',
  error: 'bg-red-600 text-white',
}

const sizes = {
  base: 'text-xl px-7 py-4',
  small: 'px-5 py-2',
}

const Button: FC<IButton> = ({
  variant = 'primary',
  size = 'base',
  fullSize,
  href,
  className: otherClassName,
  type = 'button',
  disabled,
  onClick,
  children,
}) => {
  const className = cn(
    'flex justify-center font-medium rounded-md',
    variants[variant],
    sizes[size],
    fullSize && 'w-full',
    otherClassName,
  )

  if (href) {
    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    )
  }

  return (
    <button
      className={className}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
