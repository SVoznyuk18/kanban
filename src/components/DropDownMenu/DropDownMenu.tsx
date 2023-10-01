'use client'
import React from "react";

import { Menu } from './DropDownMenu.styled';

interface IProps {
  children: React.ReactNode;
  top: string;
  right: string;
  isActive: boolean;
}

const DropDownMenu = ({ children, top, right, isActive }: IProps) => {
  return (
    <Menu top={top} right={right} isActive={isActive}>
      {children}
    </Menu>
  )
}
export default DropDownMenu;