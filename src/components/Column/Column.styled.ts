'use client'
import styled from 'styled-components';

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  row-gap: 24px;
  min-width: 280px;
  height: 100%;
`;

export const Title = styled.h3`
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  color: #828FA3;
  /* background-color: #828FA3; */
`;

export const TasksList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 100%;
  height: 100%;
  row-gap: 20px;
`;