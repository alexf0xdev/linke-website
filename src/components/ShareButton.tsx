'use client'

import { useShareModal } from '@/hooks/use-share-modal'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { LuShare2 } from 'react-icons/lu'

const disableButtonPages = ['/create', '/edit']

const ShareButton = () => {
  const pathname = usePathname()

  const shareModal = useShareModal()

  if (disableButtonPages.includes(pathname)) {
    return null
  }

  return (
    <button
      className={cn(
        'p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800',
      )}
      onClick={shareModal.onOpen}
    >
      <LuShare2 className={cn('text-zinc-600 dark:text-zinc-400 w-6 h-6')} />
    </button>
  )
}

export default ShareButton
