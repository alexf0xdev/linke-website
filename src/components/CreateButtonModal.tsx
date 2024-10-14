'use client'

import ButtonForm from './ButtonForm'
import Modal from './Modal'
import { useCreateButtonModal } from '@/hooks/use-create-button-modal'

const CreateButtonModal = () => {
  const { isOpen, onClose, onSubmit } = useCreateButtonModal()

  return (
    <Modal isOpen={isOpen} onClose={onClose} title='Create button'>
      <ButtonForm type='create' onClose={onClose} onFormSubmit={onSubmit} />
    </Modal>
  )
}

export default CreateButtonModal
