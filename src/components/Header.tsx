import { cn } from '@/lib/utils'
import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'
import { Session } from 'next-auth'
import CurrentUserDropdown from './CurrentUserDropdown'

const Header = ({
  currentUser,
}: {
  currentUser: Session['user'] | undefined
}) => {
  return (
    <header className={cn('flex items-center justify-between py-5')}>
      <Link className={cn('text-2xl font-semibold')} href='/'>
        Linke
      </Link>
      <div className='flex items-start gap-5'>
        <ThemeSwitcher />
        <CurrentUserDropdown currentUser={currentUser} />
      </div>
    </header>
  )
}

export default Header
