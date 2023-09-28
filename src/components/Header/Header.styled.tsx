import styled from "styled-components";
import { media } from '../../utils/mediaTypes';

export const HeaderSection = styled.header`
	display: flex;
	align-items: center;
	width: 100%;
	height: 96px;
	background-color: ${({ theme }) => theme.secondaryBgColor};
	border-bottom: 1px solid ${({ theme }) => theme.borderColor};
	${media.tablet} {
		height: 80px;
	}
	${media.mobile} {
		height: 64px;
	}
`;

export const LogoSection = styled.div`
	display: flex;
	align-items: center;
	height: 96px;
	min-width: 300px;
	padding-left: 35px;
	border-right: 1px solid ${({ theme }) => theme.borderColor};
	
	p {
		margin-left: 15px;
		color: ${({ theme }) => theme.textColor};
		font-size: 36px;
		font-weight: 600;
		line-height: 25px;
	}

	${media.tablet} {
		min-width: 260px;
	}

	${media.mobile} {
		overflow: hidden;
		width: 0;
		min-width: 0;
		height: 0;
		padding: 0;
	}
`;

export const HeaderMainSection = styled.div`
	padding: 0 24px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 100%;
`;

export const TitleSection = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Title = styled.h1`
	font-size: 24px;
	font-weight: 700;
	color: ${({ theme }) => theme.textColor};
	margin-right: 8px;

	${media.tablet} {
		font-size: 20px;
	}
	${media.mobile} {
		font-size: 18px;
	}
`;

export const ControlsSection = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const EditBoardControl = styled.div`
position: relative;
	margin-left: 24px;
	min-width: 10px;
	min-height: 21px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	cursor: pointer;

	span {
		min-width: 5px;
		min-height: 5px;
		border: none;
		border-radius: 100%;
		background-color: #828FA3;
	}
`;

export const EditBoardMenu = styled.div`
	position: absolute;
	top: 50px;
	right: 0;
	padding: 16px;
	width: 192px;
	height: 94px;
	background-color: ${({ theme }) => theme.primaryBgColor};
	border-radius: 8px;
	box-shadow: 0px 10px 20px 0px rgba(54, 78, 126, 0.25);
	cursor: auto;
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

export const MenuItem = styled.li`
	width: 100%;
	color: #828FA3;
	font-size: 13px;
	font-weight: 500;
	list-style-type: none;
	line-height: 23px;
	cursor: pointer;
	&:hover {
	
		background-color: #E4EBFA;
	}
`;