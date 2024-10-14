import { IButton, ICreateButton } from '@/types/button'
import { create } from 'zustand'
import { v4 as uuid } from 'uuid'

interface ICreateButtonModal {
  isOpen: boolean
  data: IButton | null
  onOpen: () => void
  onClose: () => void
  onSubmit: (data: ICreateButton) => void
  reset: () => void
}

export const useCreateButtonModal = create<ICreateButtonModal>((set) => ({
  isOpen: false,
  data: null,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  onSubmit: (data) => set({ data: { ...data, id: uuid() } }),
  reset: () => set({ data: null }),
}))
