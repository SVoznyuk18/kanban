'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useDispatch } from "react-redux";

import { useTypedSelector } from '@/UtilsRoot';
import { getAllBoardsAction } from '@/ReduxRoot'
import { IBoard } from '@/TypesRoot';
import { Nav } from '@/ComponentsRoot'
import { SidebarSection, ToggleSideBar, HideSection } from './sidebar.style';

interface INavProps {
  boards: Array<IBoard>
}

const Sidebar: React.FC<INavProps> = ({ boards }) => {

  const [toggleSidebar, setToggleSidebar] = useState<boolean>(true);
  const dispatch = useDispatch();
  const boardsFromStore = useTypedSelector(state => state?.boards?.boards);

  useEffect(() => {
    dispatch(getAllBoardsAction(boards))
  }, [boards, dispatch]);

  return (
    <SidebarSection isShowSidebar={toggleSidebar !== undefined ? toggleSidebar : false}>
      <ToggleSideBar
        isShowButton={toggleSidebar !== undefined ? toggleSidebar : false}
        onClick={() => setToggleSidebar(!toggleSidebar)}
      >
        <Image
          width='20'
          height='13'
          src='/show-sidebar.svg'
          alt='showSidebarIcon'
        />
      </ToggleSideBar>
      <Nav boards={boardsFromStore.length > 0 ? boardsFromStore : boards} />
      <HideSection onClick={() => setToggleSidebar(!toggleSidebar)}>
        <Image
          width='16'
          height='16'
          src='/icon-hide-sidebar.svg'
          alt='hide_sidebar_logo'
        />
        <p>Hide Sidebar</p>
      </HideSection>
    </SidebarSection>
  )
}

export default Sidebar;