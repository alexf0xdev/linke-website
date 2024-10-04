'use client'

import Modal from './Modal'
import { cn } from '@/lib/utils'
import ShareSocialButtons from './ShareSocialButtons'
import { useShareModal } from '@/hooks/use-share-modal'

const ShareModal = () => {
  const { open, onClose } = useShareModal()

  return (
    <Modal open={open} onClose={onClose} title='Share'>
      <p className={cn('text-zinc-600 dark:text-zinc-400')}>
        Share this page with friends
      </p>
      <ShareSocialButtons />
    </Modal>
  )
}

export default ShareModal
