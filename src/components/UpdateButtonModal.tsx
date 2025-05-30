'use client'

import ButtonForm from './ButtonForm'
import Modal from './Modal'
import { useUpdateButtonModal } from '@/hooks/use-update-button-modal'

const UpdateButtonModal = () => {
  const { isOpen, data, onClose, onSubmit } = useUpdateButtonModal()

  return (
    <Modal isOpen={isOpen} onClose={onClose} title='Update button'>
      <ButtonForm
        type='update'
        defaultValues={{
          text: data?.text!,
          href: data?.href!,
          color: data?.color!,
        }}
        onClose={onClose}
        onFormSubmit={onSubmit}
      />
    </Modal>
  )
}

export default UpdateButtonModal
