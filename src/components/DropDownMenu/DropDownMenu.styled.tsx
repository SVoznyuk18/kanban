import styled, { css } from "styled-components";

interface IProps {
  position?: string;
  top: string;
  right: string;
  isActive: boolean;
}

export const Menu = styled.div<IProps>`
  transition: max-height 1s ease-out;
  position: absolute;
  top: ${({ top }) => top ? top : 0};
  right: ${({ right }) => right ? right : 0};
  background-color: ${({ theme }) => theme.primaryBgColor};
	border-radius: 8px;
	box-shadow: 0px 10px 20px 0px rgba(54, 78, 126, 0.25);
  cursor: auto;
  max-height: 0px;
  ${({ isActive }) => isActive && css`
    max-height: 1000px;
  `}
`;