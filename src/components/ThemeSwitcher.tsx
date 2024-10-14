'use client'

import { useMounted } from '@/hooks/use-mounted'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import { LuMoon, LuSun } from 'react-icons/lu'

const ThemeSwitcher = () => {
  const mounted = useMounted()

  const { resolvedTheme, setTheme } = useTheme()

  const isDark = resolvedTheme === 'dark'

  const handleClick = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  const Icon = isDark ? LuMoon : LuSun

  if (!mounted) {
    return <div className={cn('w-10 h-10')} />
  }

  return (
    <button
      className={cn(
        'p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800',
      )}
      onClick={handleClick}
    >
      <Icon className={cn('text-zinc-600 dark:text-zinc-400 w-6 h-6')} />
    </button>
  )
}

export default ThemeSwitcher
