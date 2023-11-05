'use client'
import React, { Dispatch, SetStateAction, memo } from "react";

import { ModalContext } from '@/LibRoot';
import { BurgerMenuWrapper, Controls, Menu, MenuList } from './BurgerMenu.styled';

interface IMenuItems {
  title: string;
  modalType: string;
}

interface IProps {
  children: React.ReactNode;
  top: string;
  right: string;
  isShow: boolean;
  toggleShowCb: Dispatch<SetStateAction<boolean>>

}

const BurgerMenu = ({ children, top, right, isShow, toggleShowCb }: IProps) => {

  return (
    <BurgerMenuWrapper>
      <Controls onClick={() => toggleShowCb(prev => !prev)}>
        <span></span>
        <span></span>
        <span></span>
      </Controls>
      <Menu top={top} right={right} isShow={isShow}>
        <MenuList>
          {children}
        </MenuList>
      </Menu>
    </BurgerMenuWrapper>
  )
}
export default memo(BurgerMenu);
