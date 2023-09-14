'use client'
import React from "react";

import { Nav } from "@/ComponentsRoot";

import { MenuWrap } from './MobileMenu.styled';

interface IProps {
  isShow: boolean
}

const MobileMenu = ({ isShow }: IProps) => {
  return (
    <MenuWrap isShow={isShow}>
      {/* <Nav /> */}
    </MenuWrap>
  )
}

export default MobileMenu;