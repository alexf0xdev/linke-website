import { cn } from '@/lib/utils'
import Link from 'next/link'

const PageFooter = () => {
  return (
    <footer className={cn('py-5')}>
      <p className={cn('text-zinc-600 dark:text-zinc-400 text-center')}>
        Made with{' '}
        <Link className={cn('text-cyan-500')} href='/'>
          Linke
        </Link>
      </p>
    </footer>
  )
}

export default PageFooter
