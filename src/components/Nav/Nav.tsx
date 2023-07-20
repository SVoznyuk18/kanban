'use client';

import { ThemeSwitcher } from '@/ComponentsRoot';

import { NavWrapper, Title, NavList, NavItem } from './Nav.styled';

const Nav = () => {
    return (
        <NavWrapper>
            <Title>ALL BOARDS (3)</Title>
            <NavList>
                <NavItem>

                    <p>Platform Launch</p>

                </NavItem>
                <NavItem><p>Marketing Plan</p></NavItem>
                <NavItem><p>Roadmap</p></NavItem>
            </NavList>
            <ThemeSwitcher />
        </NavWrapper>
    )
}
export default Nav;