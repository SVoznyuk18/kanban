'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import { SidebarSection, Title, ToggleSideBar } from './sidebar.style';


const Sidebar: React.FC = () => {

  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);

  console.log(toggleSidebar)

  return (
    <SidebarSection isHiddeSidebar={toggleSidebar}>
      <Title>Hello</Title>
      <ToggleSideBar
        onClick={() => setToggleSidebar(!toggleSidebar)}
      >
        <Image
          width='20'
          height='13'
          src='/show-sidebar.svg'
          alt='showSidebarIcon'
        />

      </ToggleSideBar>
    </SidebarSection>
  )
}

export default Sidebar;