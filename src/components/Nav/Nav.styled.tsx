import styled from 'styled-components';
import { media } from '../../utils/mediaTypes';

export const NavWrapper = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  height: 100%;
  padding-top: 15px;
  padding-right: 24px;
`;
export const Title = styled.p`
  padding-left: 32px;
  margin-bottom: 20px;
  color: #828FA3;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
`;
export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
`;
export const NavItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  padding-left: 35px;
  cursor: pointer;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  
  font-size: 15px;
  font-weight: 700;

  p {
    margin-left: 15px;
    color: #828FA3;
  }

  &: hover {
    background-color: #E4EBFA;
    color: #fff;
    p {
      color: #635FC7;
    }
    svg {
      fill: #635FC7;
    }
  }
`;