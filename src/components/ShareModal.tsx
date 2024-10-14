'use client'

import Modal from './Modal'
import { cn } from '@/lib/utils'
import ShareSocialButtons from './ShareSocialButtons'
import { useShareModal } from '@/hooks/use-share-modal'

const ShareModal = () => {
  const { isOpen, onClose } = useShareModal()

  return (
    <Modal isOpen={isOpen} onClose={onClose} title='Share this page'>
      <p className={cn('text-zinc-600 dark:text-zinc-400')}>
        Share this page with friends
      </p>
      <ShareSocialButtons />
    </Modal>
  )
}

export default ShareModal
