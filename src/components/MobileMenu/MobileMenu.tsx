'use client'
import React from "react";

import { IBoard } from '@/TypesRoot';
import { Nav } from "@/ComponentsRoot";
import { MenuWrap } from './MobileMenu.styled';

interface IProps {
  isShow: boolean,
  boards: IBoard[],
  board: IBoard

}

const MobileMenu = ({ isShow, boards, board }: IProps) => {
  return (
    <MenuWrap isShow={isShow}>
      <Nav boards={boards} board={board} />
    </MenuWrap>
  )
}

export default MobileMenu;