'use client'
import styled from 'styled-components';

export const TaskWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  row-gap: 8px;
  padding: 16px 23px;
  width: 280px;
  height: auto;
  border-radius: 8px;
  list-style-type: none;
  background-color: ${({ theme }) => theme.secondaryBgColor};
  cursor: grab;
  box-shadow: 0px 4px 6px 0px rgba(54, 78, 126, 0.10);
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.textColor};
  font-size: 15px;
  font-weight: 700;
  line-height: normal;
`;

export const SubTitle = styled.h5`
  color: #828FA3;
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  
`;