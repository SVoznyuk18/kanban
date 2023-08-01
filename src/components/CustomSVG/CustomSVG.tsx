'use client';
import React from 'react';
import { SVG } from './CustomSVG.styled';

interface ISvgProps {
  width: string,
  height: string,
  fill: string,
  path: string,
  fillHover?: string,
  stroke?: string,
  strokeHover?: string,
  strokeWidth?: string,
  transform?: string,
  handleClick?: () => void
}

const CustomSVG = ({ width, height, fill, path, fillHover, stroke, strokeHover, strokeWidth, transform, handleClick }: ISvgProps) => {
  return (
    <SVG
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      fillHover={fillHover}
      stroke={stroke}
      strokeHover={strokeHover}
      strokeWidth={strokeWidth}
      transform={transform}
      onClick={handleClick}
    >
      <path
        d={path}
      />
    </SVG>
  )
}

export default CustomSVG;