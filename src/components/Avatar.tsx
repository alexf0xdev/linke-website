import { cn } from '@/lib/utils'
import Image from 'next/image'
import { FC } from 'react'

interface IAvatar {
  imageUrl: string | undefined
  size?: 'base' | 'small'
}

const sizes = {
  base: 'w-20 h-20',
  small: 'w-10 h-10',
}

const Avatar: FC<IAvatar> = ({ imageUrl, size = 'base' }) => {
  if (!imageUrl) {
    return (
      <div
        className={cn('bg-zinc-200 dark:bg-zinc-800 rounded-full w-20 h-20')}
      />
    )
  }

  return (
    <div className={cn('relative', sizes[size])}>
      <Image
        className={cn('rounded-full object-cover bg-zinc-200 dark:bg-zinc-800')}
        src={imageUrl}
        fill
        alt='Avatar'
      />
    </div>
  )
}

export default Avatar
