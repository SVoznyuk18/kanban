import styled from 'styled-components';

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
	align-items: center;
  row-gap: 24px;
`;

export const Title = styled.h3`
  width: 100%;
  color: ${({ theme }) => theme.textColor};
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
`;

export const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
`;