import { cn } from '@/lib/utils'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={cn('sm:flex sm:items-center sm:justify-between py-5')}>
      <p className={cn('text-zinc-600 dark:text-zinc-400')}>&copy; Linke</p>
      <p className={cn('text-zinc-600 dark:text-zinc-400')}>
        This project is{' '}
        <Link
          className={cn('text-cyan-500')}
          href='https://github.com/alexf0xdev/linke-website'
        >
          open source
        </Link>
      </p>
    </footer>
  )
}

export default Footer
