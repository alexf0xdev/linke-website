import { IButton, ICreateButton } from '@/types/button'
import { create } from 'zustand'

interface IUpdateButtonModal {
  isOpen: boolean
  id: string
  data: IButton | null
  onOpen: (id: string, data: IButton) => void
  onClose: () => void
  onSubmit: (data: ICreateButton) => void
}

export const useUpdateButtonModal = create<IUpdateButtonModal>((set) => ({
  isOpen: false,
  id: '',
  data: null,
  onOpen: (id, data) => set({ isOpen: true, id, data }),
  onClose: () => set({ isOpen: false }),
  onSubmit: (data) => set(({ id }) => ({ data: { ...data, id } })),
}))
