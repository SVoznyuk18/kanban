import Image from 'next/image';
import { useModal } from '@/src/utils/ModalProvider';
import { ModalWrapper, ModalContent, CloseButton } from './Modal.styled';

interface IModalContext {
  handleToggleModal: (T: string) => void,
  isOpenModal: boolean,
  modalType: string,
}

const RenderModal = ({ modalType, ...props }: IModalContext) => {
  switch (modalType) {
    case 'navMenu':
      return <h1>NAv</h1>
    default:
      return <h1>Default</h1>
  }
}
const Modal = () => {

  const { handleToggleModal, isOpenModal, modalType } = useModal();

  return (
    <ModalWrapper isOpenModal={isOpenModal}>
      <ModalContent>
        <CloseButton onClick={() => handleToggleModal(modalType)}>
          <Image
            width="18"
            height="18"
            src='/icon-close.svg'
            alt='close_icon'
          />
        </CloseButton>
        <RenderModal isOpenModal={isOpenModal} modalType={modalType} handleToggleModal={handleToggleModal} />
      </ModalContent>
    </ModalWrapper>
  )
}

export default Modal;