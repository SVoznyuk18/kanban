import styled from 'styled-components';

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
  justify-content: start;
  align-items: center;
  column-gap: 12px;
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.primaryBgColor};
  border-radius: 4px;
  padding: 0 12px;
`;

export const Label = styled.label<IStyleProps>`
  display: inline;
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ labelFontSize }) => labelFontSize || '14px'};
  font-weight: 500;
  cursor: pointer;
`;

export const Input = styled.input<IStyleProps>`
  height: ${({ height }) => height || '16px'};
  width: ${({ width }) => width || '16px'};
 
  font-weight: 700;
  cursor: pointer;
  
  &:checked + label {
    text-decoration: line-through;
    opacity: 0.5;
  }
`;

