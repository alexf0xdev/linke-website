'use client'

import ButtonForm from './ButtonForm'
import Modal from './Modal'
import { useCreateButtonModal } from '@/hooks/use-create-button-modal'

const CreateButtonModal = () => {
  const { open, onClose, onSubmit } = useCreateButtonModal()

  return (
    <Modal open={open} onClose={onClose} title='Create button'>
      <ButtonForm type='create' onClose={onClose} onFormSubmit={onSubmit} />
    </Modal>
  )
}

export default CreateButtonModal
