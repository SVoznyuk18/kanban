import styled, { css } from "styled-components";

interface IProps {
	isShow: boolean
}

export const MenuWrap = styled.div <IProps>`
	position: absolute;
	top: 80px;
	left: 50%;
	transform: translateX(-50%);
	background-color: ${({ theme }) => theme.secondaryBgColor};
	padding: 16px 0;
	border-radius: 8px;
	width: 0;
	height: 0;
	overflow: hidden;

	${props => props.isShow && css`
		width: 265px;
		height: auto;
		overflow: visible;
	`}
`;