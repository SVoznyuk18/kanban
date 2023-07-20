import styled from 'styled-components';

interface ISvgProps {
  width: string,
  height: string,
  fill: string,
  fillHover?: string,
  stroke?: string,
  strokeHover?: string,
}

export const SVG = styled.svg<ISvgProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  fill: ${props => props.fill};

  path {
    stroke: ${props => props.stroke};
  };
  
  &:hover {
    fill: ${props => props.fillHover};
    path {
      stroke: ${props => props.strokeHover};
    };
  }
`;