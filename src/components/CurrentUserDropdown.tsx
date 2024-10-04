'use client'

import { Session } from 'next-auth'
import { useState } from 'react'
import Button from './Button'
import { cn } from '@/lib/utils'
import { LuLogOut } from 'react-icons/lu'
import { signOut } from 'next-auth/react'
import Avatar from './Avatar'
import { useClickOutside } from '@/hooks/use-click-outside'

const CurrentUserDropdown = ({
  currentUser,
}: {
  currentUser: Session['user'] | undefined
}) => {
  const [open, setOpen] = useState(false)

  const ref = useClickOutside(() => setOpen(false))

  if (!currentUser) {
    return (
      <Button size='small' href='/login'>
        Login
      </Button>
    )
  }

  return (
    <div className='relative z-10' ref={ref}>
      <button onClick={() => setOpen((prev) => !prev)}>
        <Avatar imageUrl={currentUser.image!} size='small' />
      </button>
      {open && (
        <div
          className={cn(
            'absolute right-0 flex flex-col bg-zinc-200 dark:bg-zinc-800 p-2 w-40 rounded-md',
          )}
        >
          <button
            className={cn(
              'flex items-center gap-2 p-2 rounded hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:text-red-500',
            )}
            onClick={() => signOut()}
          >
            <LuLogOut className={cn('w-5 h-5')} />
            Logout
          </button>
        </div>
      )}
    </div>
  )
}

export default CurrentUserDropdown
