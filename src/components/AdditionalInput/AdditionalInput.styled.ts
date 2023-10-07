'use client'
import styled from 'styled-components';


interface IStyleProps {
  width?: string,
  height?: string,
  labelFontSize?: string
  padding?: string
  borderRadius?: string
  fontSize?: string
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 12px;
  margin: 16px 0px;

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

export const Input = styled.input<IStyleProps>`
  height: ${({ height }) => height || '40px'};
  width: ${({ width }) => width || '100%'};
  padding: ${({ padding }) => padding || '8px 16px'};
  border: solid 1px rgba(130, 143, 163, 0.25);
  border-radius: ${({ borderRadius }) => borderRadius || '8px'};
  font-size: ${({ fontSize }) => fontSize || '13px'};
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
  outline: none;
  background-color: transparent;
`;

export const Button = styled.button`
  display: flex;
  justify-content:center;
  align-items: center;
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: #EA5555;
  font-weight: 500;
`;