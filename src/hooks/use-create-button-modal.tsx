import { IButton, ICreateButton } from '@/types/button'
import { create } from 'zustand'
import { v4 as uuid } from 'uuid'

interface ICreateButtonModal {
  open: boolean
  data: IButton | null
  onOpen: () => void
  onClose: () => void
  onSubmit: (data: ICreateButton) => void
  reset: () => void
}

export const useCreateButtonModal = create<ICreateButtonModal>((set) => ({
  open: false,
  data: null,
  onOpen: () => set({ open: true }),
  onClose: () => set({ open: false }),
  onSubmit: (data) => set({ data: { ...data, id: uuid() } }),
  reset: () => set({ data: null }),
}))
