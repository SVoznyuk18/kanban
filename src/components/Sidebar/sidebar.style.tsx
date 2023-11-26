'use client';

import styled, { css } from 'styled-components';
import { media } from '@/UtilsRoot';
interface IProps {
  isShowSidebar?: boolean | undefined,
  isShowButton?: boolean | undefined,
}

export const SidebarSection = styled.div <IProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 0px;
  min-width: 0px;
  height: 100%;
  padding-bottom: 45px;
  background-color: ${({ theme }) => theme.secondaryBgColor};
  border-right: 1px solid ${({ theme }) => theme.borderColor};
  transition: width min-width 0.4s;
  overflow: hidden;
  
  ${props => props.isShowSidebar && css`
    width: 300px;
    min-width: 300px;
    overflow: visible;
    transition: width min-width 0.4s;

    ${media.tablet} {
      width: 260px;
      min-width: 260px;
    }

    ${media.mobile} {
      overflow: hidden;
      width: 0;
      min-width: 0;
      height: 0;
    }

  `}
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

  &:hover {
    background-color: #E4EBFA;

    p {
      color: #635FC7;
    }
  }
`;