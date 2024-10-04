'use client'

import { useClickOutside } from '@/hooks/use-click-outside'
import { cn } from '@/lib/utils'
import { FC, ReactNode, useEffect } from 'react'
import { LuX } from 'react-icons/lu'

interface IModal {
  title?: string
  open: boolean
  onClose: () => void
  children: ReactNode
}

const Modal: FC<IModal> = ({ title, open, onClose, children }) => {
  const ref = useClickOutside(onClose)

  useEffect(() => {
    document.documentElement.classList.toggle('overflow-hidden', open)
  }, [open])

  if (!open) return null

  return (
    <div
      className={cn(
        'fixed inset-0 flex items-end md:items-center justify-center bg-zinc-900/50',
      )}
    >
      <div
        className={cn(
          'bg-zinc-200 dark:bg-zinc-800 p-5 rounded-t-md md:rounded-md w-full max-w-2xl overflow-x-hidden sm:overflow-x-visible',
        )}
        ref={ref}
      >
        <div
          className={cn(
            'flex items-center justify-between',
            title ? 'justify-between' : 'justify-end',
          )}
        >
          {title && <h2 className={cn('text-2xl')}>{title}</h2>}
          <button
            className={cn(
              'p-2 rounded-full hover:bg-zinc-300 dark:hover:bg-zinc-700',
            )}
            onClick={onClose}
          >
            <LuX className={cn('text-zinc-600 dark:text-zinc-400 w-6 h-6')} />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
