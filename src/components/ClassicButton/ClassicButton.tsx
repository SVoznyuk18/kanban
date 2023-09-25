'use client'
import React from 'react';
import { Button } from './ClassicButton.styled';

interface IClassicButton {
	children: React.ReactNode,
	variant?: 'confirm' | 'light' | 'delete' | 'default',
	width?: string,
	height?: string,
	disabled?: boolean,
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

const ClassicButton = ({ children, variant, width, height, disabled, onClick }: IClassicButton) => {
	return (
		<Button
			variant={variant}
			width={width}
			height={height}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</Button>

	)
}

export default ClassicButton;