'use client'
import styled from 'styled-components';

interface IProps {
	variant?: 'confirm' | 'light' | 'delete' | 'default',
	width?: string,
	height?: string,
	disabled?: boolean,
}

export const Button = styled.button<IProps>`
	width: ${({ width }) => width || '48px'};
	height: ${({ height }) => height || '32px'};
	border-radius: 24px;
	background-color: #635FC7;
	cursor: pointer;
	border: none;
	color: #FFFF;
	font-size: 15px;
	font-weight: 700;

	&:hover {
		background-color: #A8A4FF;
	}
`;