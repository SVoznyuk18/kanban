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
  handleClick?: () => void
}

const CustomSVG = ({ width, height, fill, path, fillHover, stroke, strokeHover, handleClick }: ISvgProps) => {
  return (
    <SVG
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      fillHover={fillHover}
      stroke={stroke}
      strokeHover={strokeHover}
      onClick={handleClick}
    >
      <path
        d={path}
      />
    </SVG>
  )
}

export default CustomSVG;