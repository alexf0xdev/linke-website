'use client'

import { useMounted } from '@/hooks/use-mounted'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import { LuMoon, LuSun } from 'react-icons/lu'

const ThemeSwitcher = () => {
  const mounted = useMounted()

  const { resolvedTheme, setTheme } = useTheme()

  if (!mounted) {
    return <div className={cn('w-10 h-10')} />
  }

  const handleClick = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      className={cn(
        'p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800',
      )}
      onClick={handleClick}
    >
      {resolvedTheme === 'dark' ? (
        <LuMoon className={cn('text-zinc-600 dark:text-zinc-400 w-6 h-6')} />
      ) : (
        <LuSun className={cn('text-zinc-600 dark:text-zinc-400 w-6 h-6')} />
      )}
    </button>
  )
}

export default ThemeSwitcher
