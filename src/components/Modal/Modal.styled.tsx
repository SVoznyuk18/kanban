
import styled from 'styled-components';

interface Iprops {
	isOpenModal?: boolean
}

export const ModalWrapper = styled.div<Iprops>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.4);
	position: fixed;
	top: 0;
	left: 0;
	transform: ${({ isOpenModal }) => (isOpenModal ? 'scale(1)' : 'none')};
	z-index: ${({ isOpenModal }) => (isOpenModal ? '99999' : -'10')};
	opacity: ${({ isOpenModal }) => (isOpenModal ? 1 : 0)};
`;

export const ModalContent = styled.div`
	position: relative;
	width: 500px;
	height: 500px;
	padding: 20px ;
	background-color: #ffff;
	border-radius: 20px;
`;

export const CloseButton = styled.div`
  position: absolute;s
  top: 5px;
  right: 5px;
  cursor: pointer;
`;