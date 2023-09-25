'use client'
import styled from 'styled-components';
import React, { LabelHTMLAttributes } from 'react';


interface IStyleProps {
  width?: string,
  height?: string,
  labelFontSize?: string
  padding?: string
  borderRadius?: string
  fontSize?: string
}

export const Wrapper = styled.div<IStyleProps>`
  display: inline-flex;
  flex-direction: column;
  row-gap: 8px;
  width: ${({ width }) => width || '100%'};
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

export const Label = styled.label<IStyleProps>`
  display: inline;
  color: ${({ theme }) => theme.labelColor};
  font-size: ${({ labelFontSize }) => labelFontSize || '12px'};
  font-weight: 500;
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: #EA5555;
  font-weight: 500;
`;