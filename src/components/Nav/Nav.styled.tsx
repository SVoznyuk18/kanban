import styled from 'styled-components';

export const NavWrapper = styled.nav`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 15px;
  display: grid;
  grid-template-rows: 35px 1fr 48px;
  align-content: start
`;

export const Title = styled.p`
  width: 100%;
  padding-left: 32px;
  margin-bottom: 20px;
  color: #828FA3;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const NavList = styled.ul`
  padding-right: 24px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-self: start;
  width: 100%;
`;

export const NavItem = styled.li`
  width: 100%;
  height: 48px;
  padding-left: 35px;
  cursor: pointer;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  a, div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    column-gap: 15px;
    text-decoration: none;
  }
  p {
    font-size: 15px;
    font-weight: 700;
    color: #828FA3;
  }
`;

export const NavItemHover = styled(NavItem)`
  &:hover {
    background-color: #E4EBFA;
    p {
      color: #635FC7;
    }
    svg {
      fill: #635FC7;
    }
  }
`;

export const NavItemActive = styled(NavItem)`
  background-color: #635FC7;
  p {
    color: #fff;
  }
  svg {
    fill: #fff;
  }
`;
