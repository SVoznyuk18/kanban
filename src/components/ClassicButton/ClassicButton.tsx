'use client'
import React, { memo } from 'react';
import { Button } from './ClassicButton.styled';

interface IClassicButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode,
	style?: object,
	variant?: 'confirm' | 'light' | 'delete' | 'default' | 'column',
	width?: string,
	type: "submit" | "reset" | "button" | undefined,
	height?: string,
	disabled?: boolean,
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

const ClassicButton = ({ children, type, style, variant, width, height, disabled, onClick }: IClassicButton) => {
	return (
		<Button
			style={style}
			type={type}
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

export default memo(ClassicButton);