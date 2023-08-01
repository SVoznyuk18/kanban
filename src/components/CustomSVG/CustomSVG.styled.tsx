import styled from 'styled-components';

interface ISvgProps {
  width: string,
  height: string,
  fill: string,
  fillHover?: string,
  stroke?: string,
  strokeHover?: string,
  strokeWidth?: string,
  transform?: string,
}

export const SVG = styled.svg<ISvgProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  fill: ${props => props.fill};
  transform: ${props => props.transform};
  // transform: rotate(180deg);

  path {
    stroke: ${props => props.stroke};
    stroke-width: ${props => props.strokeWidth};
   
  };
  
  &:hover {
    fill: ${props => props.fillHover};
    path {
      stroke: ${props => props.strokeHover};
    };
  }
`;