'use client'
import React, { memo, useContext, useState } from "react";

import { ModalContext } from '@/LibRoot';
import { BurgerMenuWrapper, Controls, Menu, MenuList, MenuItem } from './BurgerMenu.styled';

interface IMenuItems {
  title: string;
  modalType: string;
}

interface IProps {
  top: string;
  right: string;
  menuItems: IMenuItems[];
}

const BurgerMenu = ({ top, right, menuItems }: IProps) => {

  const { handleOpenModal } = useContext(ModalContext);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const openModal = (modalType: string): void => {
    handleOpenModal(modalType);
    setToggleMenu(prev => !prev);
  }

  return (
    <BurgerMenuWrapper>
      <Controls onClick={() => setToggleMenu(prev => !prev)}>
        <span></span>
        <span></span>
        <span></span>
      </Controls>
      <Menu top={top} right={right} isShow={toggleMenu}>
        <MenuList>
          {menuItems && menuItems.map((elem, index) => (
            <MenuItem key={index} onClick={() => openModal(elem?.modalType)} >{elem?.title}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </BurgerMenuWrapper>
  )
}
export default memo(BurgerMenu);
