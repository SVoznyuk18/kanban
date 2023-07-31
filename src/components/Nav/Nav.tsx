'use client';

import { ThemeSwitcher, CustomSVG } from '@/ComponentsRoot';

import { NavWrapper, Title, NavList, NavItem } from './Nav.styled';

import { SVGPath } from '@/ConstantsRoot';

const Nav = () => {
  return (
    <NavWrapper>
      <Title>ALL BOARDS (3)</Title>
      <NavList>
        <NavItem>
          <CustomSVG
            width='16px'
            height='16px'
            fill='#828FA3'
            path={SVGPath.board}
          />
          <p>Platform Launch</p>
        </NavItem>
        <NavItem>
          <CustomSVG
            width='16px'
            height='16px'
            fill='#828FA3'
            path={SVGPath.board}
          />
          <p>Marketing Plan</p></NavItem>
        <NavItem>
          <CustomSVG
            width='16px'
            height='16px'
            fill='#828FA3'
            path={SVGPath.board}
          />
          <p>Roadmap</p>
        </NavItem>
      </NavList>
      <ThemeSwitcher />
    </NavWrapper>
  )
}

export default Nav;