'use client'
import React from "react";

import { IBoard } from '@/TypesRoot';
import { Nav } from "@/ComponentsRoot";
import { MenuWrap } from './MobileMenu.styled';

interface IProps {
  isShow: boolean,
  boards: IBoard[],
  board: IBoard;
  isLoading: boolean;
}

const MobileMenu = ({ isShow, boards, board, isLoading }: IProps) => {
  return (
    <MenuWrap isShow={isShow}>
      <Nav boards={boards} board={board} isLoading={isLoading} />
    </MenuWrap>
  )
}

export default MobileMenu;