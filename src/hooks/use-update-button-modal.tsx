import { IButton, ICreateButton } from '@/types/button'
import { create } from 'zustand'

interface IUpdateButtonModal {
  open: boolean
  id: string
  data: IButton | null
  onOpen: (id: string, data: IButton) => void
  onClose: () => void
  onSubmit: (data: ICreateButton) => void
  reset: () => void
}

export const useUpdateButtonModal = create<IUpdateButtonModal>((set) => ({
  open: false,
  id: '',
  data: null,
  onOpen: (id, data) => set({ open: true, id, data }),
  onClose: () => set({ open: false }),
  onSubmit: (data) => set(({ id }) => ({ data: { ...data, id } })),
  reset: () => set({ id: '', data: null }),
}))
