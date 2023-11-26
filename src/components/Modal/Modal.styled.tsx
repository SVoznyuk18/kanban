
import styled from 'styled-components';
import { media } from '@/UtilsRoot';

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
	${media.mobile} {
		padding: 0 16px;
	}
`;

export const ModalContent = styled.div`
	position: relative;
	width: 480px;
	min-width: 340px;
	max-height: 600px;
	padding: 32px ;
	background-color: ${({ theme }) => theme.secondaryBgColor};
	border-radius: 20px;
	overflow: auto;

	${media.mobile} {
		padding: 24px;
		max-height: 500px;
	}
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;