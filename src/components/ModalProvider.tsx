import CreateButtonModal from './CreateButtonModal'
import ShareModal from './ShareModal'
import UpdateButtonModal from './UpdateButtonModal'

const ModalProvider = () => {
  return (
    <>
      <CreateButtonModal />
      <UpdateButtonModal />
      <ShareModal />
    </>
  )
}

export default ModalProvider
