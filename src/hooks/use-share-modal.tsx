import { create } from 'zustand'

interface IShareModal {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useShareModal = create<IShareModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))
