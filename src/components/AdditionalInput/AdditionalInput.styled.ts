'use client'
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 4px;
  margin-top: 16px;
`;
export const Title = styled.h4`
  width: 100%;
  text-align: left;
  color: #828FA3;
  font-size: 12px;
  font-weight: 700;
`;
export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 16px;
`;

export const Button = styled.button`
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
`;