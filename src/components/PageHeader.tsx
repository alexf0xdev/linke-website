import { cn } from '@/lib/utils'
import ThemeSwitcher from './ThemeSwitcher'
import ShareButton from './ShareButton'

const PageHeader = () => {
  return (
    <header className={cn('flex items-center justify-end py-5')}>
      <div className={cn('flex gap-1')}>
        <ThemeSwitcher />
        <ShareButton />
      </div>
    </header>
  )
}

export default PageHeader
