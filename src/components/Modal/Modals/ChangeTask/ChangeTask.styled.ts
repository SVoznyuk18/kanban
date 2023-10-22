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

export const Description = styled.h4`
  width: 100%;

  font-size: 13px;
  font-weight: 500;
  line-height: 23px;
  color: #828FA3;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 24px;
`;

export const GroupCheckbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 8px;
`;

export const Label = styled.h3`
  width: 100%;
  color: ${({ theme }) => theme.textColor};
  text-align: start;
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 16px;
`;