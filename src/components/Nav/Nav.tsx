'use client';
import React, { memo, useContext } from 'react';
import Link from 'next/link';

import { ModalContext } from '@/LibRoot';
import { IBoard } from '@/TypesRoot';
import { ThemeSwitcher, CustomSVG, SkeletonLoader } from '@/ComponentsRoot';
import { NavWrapper, Title, NavList, NavItemHover, NavItemActive } from './Nav.styled';
import { SVGPath } from '@/ConstantsRoot';

interface INavProps {
  boards: Array<IBoard>;
  board: IBoard;
  isLoading: boolean;
}

const Nav: React.FC<INavProps> = ({ boards, board, isLoading }) => {
  const { handleOpenModal } = useContext(ModalContext);

  return (
    <NavWrapper>
      <Title>{`ALL BOARDS (${boards && boards.length})`}</Title>
      <NavList>
        {
          isLoading && <SkeletonLoader count={5} variants="board" />
        }
        {boards && boards.map(boardItem => {
          if (boardItem?._id === board?._id) {
            return (
              <NavItemActive key={boardItem?._id}>
                <Link href={`/${boardItem?.url}`}>
                  <CustomSVG
                    width='16px'
                    height='16px'
                    fill='#828FA3'
                    path={SVGPath.board}
                  />
                  <p>{boardItem?.boardName}</p>
                </Link>
              </NavItemActive>
            )
          } else {
            return (
              <NavItemHover key={boardItem?._id}>
                <Link href={`/${boardItem?.url}`}>
                  <CustomSVG
                    width='16px'
                    height='16px'
                    fill='#828FA3'
                    path={SVGPath.board}
                  />
                  <p>{boardItem?.boardName}</p>
                </Link>
              </NavItemHover>
            )
          }
        })}
        <NavItemHover
          onClick={() => handleOpenModal("AddNewBoard")}
        >
          <div>
            <CustomSVG
              width='16px'
              height='16px'
              fill='#828FA3'
              path={SVGPath.board}
            />
            <p>+ Create New Board</p>
          </div>
        </NavItemHover>
      </NavList>
      <ThemeSwitcher />
    </NavWrapper>
  )
}

export default memo(Nav);