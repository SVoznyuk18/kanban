
import { ModalWrapper, ModalContent } from './Modal.styled';

interface IProps {
    isOpenModal?: boolean
    modalType?: string
}

const RenderModal = ({ modalType, ...props }: IProps) => {
    switch (modalType) {
        case 'navMenu':
            return <h1>NAv</h1>
        default:
            return <h1>Default</h1>
    }
}
const Modal = ({ isOpenModal, modalType }: IProps) => {

    return (
        <ModalWrapper isOpenModal={isOpenModal}>
            <ModalContent>
                <RenderModal isOpenModal={isOpenModal} modalType={modalType} />
            </ModalContent>
        </ModalWrapper>
    )
}

export default Modal;