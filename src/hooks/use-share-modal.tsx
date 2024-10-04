import { create } from 'zustand'

interface IShareModal {
  open: boolean
  onOpen: () => void
  onClose: () => void
}

export const useShareModal = create<IShareModal>((set) => ({
  open: false,
  onOpen: () => set({ open: true }),
  onClose: () => set({ open: false }),
}))
