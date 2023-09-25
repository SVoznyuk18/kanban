'use client'
import styled, { css } from 'styled-components';

interface IProps {
	variant?: 'confirm' | 'light' | 'delete' | 'default' | 'column',
	width?: string,
	height?: string,
	disabled?: boolean,
}

export const Button = styled.button<IProps>`
	width: ${({ width }) => width || "auto"};
	height: ${({ height }) => height || '40px'};
	padding: 0px 25px;
	border-radius: 24px;
	background-color: #635FC7;
	cursor: pointer;
	border: none;
	color: #FFFF;
	font-size: 15px;
	font-weight: 700;

	${({ variant }) => variant === 'default' && css`
		background-color: #635FC7;
		color: #FFFF;
		&:hover {
			background-color: #A8A4FF;
		}
		&:disabled {
			background-color: ${({ theme }) => theme.disabledBtn};
			cursor: inherit;
		}
	`}
	${({ variant }) => variant === 'light' && css`
		background-color: ${({ theme }) => theme.lightBtn};
		color: #635FC7;
		&:hover {
			background-color: ${({ theme }) => theme.lightHoverBtn};
		}
		/* &:disabled {
			background-color: ${({ theme }) => theme.disabledBtn};
			cursor: inherit;
		} */
	`}

	${({ variant }) => variant === 'delete' && css`
		background-color: #EA5555;
		color: #FFFF;
		&:hover {
			background-color: #FF9898;
		}
		/* &:disabled {
			background-color: ${({ theme }) => theme.disabledBtn};
			cursor: inherit;
		} */
	`}

	${({ variant }) => variant === 'column' && css`
		font-size: 24px;
		background-color: ${({ theme }) => theme.secondaryBgColor};
		color: #828FA3;
		&:hover {
			color: #635FC7;
		}
		/* &:disabled {
			background-color: ${({ theme }) => theme.disabledBtn};
			cursor: inherit;
		} */
	`}

	
`;