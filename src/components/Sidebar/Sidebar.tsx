'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { ThemeSwitcher } from '@/ComponentsRoot';
import { SidebarSection, LogoSection, ToggleSideBar, HideSection } from './sidebar.style';

const Sidebar: React.FC = () => {

  const [toggleSidebar, setToggleSidebar] = useState<boolean>(true);

  return (
    <SidebarSection isShowSidebar={toggleSidebar !== undefined ? toggleSidebar : false}>
      <LogoSection>
        <Image
          width='25'
          height='25'
          src='/logo-dark.svg'
          alt="logo_icon"
        />
        <p>kanban</p>
      </LogoSection>
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
      <ThemeSwitcher />
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