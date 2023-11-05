import styled from 'styled-components';
import { media } from '@/UtilsRoot';

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
	align-items: center;
  row-gap: 24px;
`;

export const Title = styled.h2`
  width: 100%;
  text-align: start;
  color:#EA5555;
  font-weight: 700;
  line-height: normal;
`;

export const Description = styled.h3`
  color:  #828FA3;
  font-size: 13px;
  font-weight: 500;
  line-height: 23px;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  column-gap:16px;

 ${media.mobile} {
    flex-direction: column;
    row-gap:16px;
  }
`;