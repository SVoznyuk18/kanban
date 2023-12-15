'use client'
import styled, { css } from 'styled-components';

interface IProps {
  columnTarget: boolean;
}

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  row-gap: 24px;
  width: auto;
  height: 100%;
`;

export const Title = styled.h3`
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  color: #828FA3;
`;

export const TasksList = styled.ul<IProps>`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 100%;
  height: 100%;
  row-gap: 20px;
  border-radius: 24px;
  overflow-y: auto;

  ${({ columnTarget }) => columnTarget && css`
    box-shadow: 0px 1px 9px 3px rgba(99,95,199,0.86);
    -webkit-box-shadow: 0px 1px 9px 3px rgba(99,95,199,0.86);
    -moz-box-shadow: 0px 1px 9px 3px rgba(99,95,199,0.86);
  `};
`;
