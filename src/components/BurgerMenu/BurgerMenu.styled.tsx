import styled, { css } from "styled-components";

interface IProps {
	position?: string;
	top: string;
	right: string;
	isShow: boolean;
}

export const BurgerMenuWrapper = styled.div`
  position: relative;
`;

export const Controls = styled.button`
  position: relative;
	margin-left: 24px;
	min-width: 21px;
	min-height: 21px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
  background-color: initial;
  border: none;
	cursor: pointer;

	span {
		min-width: 5px;
		min-height: 5px;
		border: none;
		border-radius: 100%;
		background-color: #828FA3;
	}
`;

export const Menu = styled.div<IProps>`
  position: absolute;
  top: ${({ top }) => top ? top : 0};
  right: ${({ right }) => right ? right : 0};
  background-color: ${({ theme }) => theme.primaryBgColor};
	border-radius: 8px;
	box-shadow: 0px 10px 20px 0px rgba(54, 78, 126, 0.25);
  cursor: auto;
  transition: max-height 0.5s ease-out;
  max-height: 0px;
  overflow: hidden;

  ${({ isShow }) => isShow && css`
    max-height: 1000px;
  `}
`;

export const MenuList = styled.ul`
  padding: 16px;
  width: 192px;
	height: 94px;
	display: flex;
	flex-direction:column;
	justify-content: center;
	align-items: start;
	row-gap: 16px;
`;
