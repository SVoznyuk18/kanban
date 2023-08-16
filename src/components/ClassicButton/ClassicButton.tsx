'use client'
import React from 'react';
import { Button } from './ClassicButton.styled';

interface IClassicButton {
	children: React.ReactNode,
	variant?: 'confirm' | 'light' | 'delete' | 'default',
	width?: string,
	height?: string,
	disabled?: boolean,
	onClick?: () => void,
}

const ClassicButton = ({ children, width, height, onClick }: IClassicButton) => {
	return (
		<Button
			width={width}
			height={height}
			onClick={onClick}
		>
			{children}
		</Button>

	)
}

export default ClassicButton;