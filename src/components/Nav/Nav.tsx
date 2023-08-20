'use client';
import React from 'react';
import { IBoard } from '@/TypesRoot';
import { ThemeSwitcher, CustomSVG } from '@/ComponentsRoot';

import { NavWrapper, Title, NavList, NavItem } from './Nav.styled';

import { SVGPath } from '@/ConstantsRoot';

interface INavProps {
  boards: Array<IBoard>
}

const Nav: React.FC<INavProps> = ({ boards }) => {
  return (
    <NavWrapper>
      <Title>{`ALL BOARDS (${boards && boards.length})`}</Title>
      <NavList>
        {boards && boards.map(board => (
          <NavItem key={board?._id}>
            <CustomSVG
              width='16px'
              height='16px'
              fill='#828FA3'
              path={SVGPath.board}
            />
            <p>{board?.boardName}</p>
          </NavItem>
        ))}
      </NavList>
      <ThemeSwitcher />
    </NavWrapper>
  )
}

export default Nav;