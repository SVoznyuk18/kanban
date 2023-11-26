import styled, { css } from "styled-components";
import { media } from '@/UtilsRoot';

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
	max-height: 0;
	overflow: hidden;
	transition: max-height 0.5s ease-out;

	${media.mobile} {
		${props => props.isShow && css`
		width: 265px;
		max-height: 1000px;
		overflow: visible;
	`}
	}
`;