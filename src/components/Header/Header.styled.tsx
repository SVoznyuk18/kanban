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

export const ClassicButton = styled.button`
	width: 164px;
	height: 48px;
	border-radius: 24px;
	background-color: #A8A4FF;
	cursor: pointer;
	border: none;
	color: #FFFF;
	font-size: 15px;
	font-weight: 700;

	&:hover {
		background-color: #635FC7;
	}
`;

export const EditBoardControl = styled.div`
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