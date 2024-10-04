'use client'

import { IButton } from '@/types/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { FC } from 'react'
import { LuPencilLine, LuTrash2 } from 'react-icons/lu'
import { Reorder } from 'framer-motion'

interface IPageButtonCard {
  button: IButton
  edit?: boolean
  onEdit?: () => void
  onRemove?: () => void
}

const colors = {
  WHITE: 'bg-zinc-200 text-black',
  BLACK: 'bg-zinc-800 text-white',
  RED: 'bg-red-600 text-white',
  GREEN: 'bg-green-600 text-white',
}

const PageButtonCard: FC<IPageButtonCard> = ({
  button,
  edit,
  onEdit,
  onRemove,
}) => {
  const className = cn(
    'flex justify-center text-xl font-medium px-7 py-4 rounded-md w-full transition hover:scale-[1.02]',
    colors[button.color],
  )

  if (edit) {
    return (
      <Reorder.Item as='div' className='relative' value={button}>
        <button className={className} type='button'>
          {button.text}
        </button>
        <div
          className={cn('absolute top-2.5 right-2.5 sm:-right-24 flex gap-1')}
        >
          <button
            type='button'
            className={cn(
              'p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800',
            )}
            onClick={onEdit}
          >
            <LuPencilLine
              className={cn('text-zinc-600 dark:text-zinc-400 w-6 h-6')}
            />
          </button>
          <button
            type='button'
            className={cn(
              'p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800',
            )}
            onClick={onRemove}
          >
            <LuTrash2
              className={cn('text-zinc-600 dark:text-zinc-400 w-6 h-6')}
            />
          </button>
        </div>
      </Reorder.Item>
    )
  }

  return (
    <Link className={className} href={button.href} target='_blank'>
      {button.text}
    </Link>
  )
}

export default PageButtonCard
