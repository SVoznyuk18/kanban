'use client';

import styled from 'styled-components'

export const SidebarSection = styled.div <{ isHiddeSidebar: boolean }>`
  width: 300px;
  height: 100vh;
  background-color: aqua;
  transition: width 0.2s;
  ${({ isHiddeSidebar }) => isHiddeSidebar && `
    width: 0px;
    overflow: hidden;
    transition: width 0.2s;
  `}
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: red;
`;

export const ToggleSideBar = styled.button`
  position: fixed;
  left: 0;
  bottom: 32px;
  width: 56px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  background-color: #635FC7;
  cursor: pointer;

  &:hover {
    background-color: #A8A4FF;
  }
`;