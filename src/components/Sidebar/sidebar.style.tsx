'use client';

import styled, { css } from 'styled-components';

interface IProps {
  isShowSidebar?: boolean | undefined,
  isShowButton?: boolean | undefined,
}

export const SidebarSection = styled.div <IProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 0px;
  height: 100vh;
  padding-bottom: 45px;
  background-color: aqua;
  transition: all 0.2s;
  overflow: hidden;
  
  ${props => props.isShowSidebar && css`
    width: 300px;
    overflow: visible;
    transition: all 0.2s;
  `}
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  height: 96px;
  width: 300px;
  padding-left: 35px;

   p {
    margin-left: 15px;
    color: #000112;
    font-size: 36px;
    font-weight: 600;
    line-height: 25px;
   }
`;

export const ToggleSideBar = styled.button<IProps>`
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
  transition: all 0.2s;
  overflow: visible;

  &:hover {
    background-color: #A8A4FF;
  }

  ${props => props.isShowButton && css`
    width: 0;
    overflow: hidden;
    transition: all 0.2s;
  `}
`;

export const HideSection = styled.div`
  display: flex;
  align-items: center;
  width: 275px;
  min-width: 240px;
  height: 48px;
  padding-left: 35px;
  margin-top: 22px;
  cursor: pointer;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;

  p {
    margin-left: 15px;
    font-size: 15px;
    font-weight: 700;
    color: #828FA3;
   }

  &: hover {
    background-color: #E4EBFA;

    p {
      color: #635FC7;
    }
  }
`;