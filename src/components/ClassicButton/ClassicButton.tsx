'use client'
import React from 'react';
import { Button } from './ClassicButton.styled';

interface IClassicButton {
	children: React.ReactNode,
	variant?: 'confirm' | 'light' | 'delete' | 'default',
	width: string,
	height: string,
	disabled: boolean,
	onClick: () => void,
}

const ClassicButton = ({ children }: IClassicButton) => {
	return (
		<Button>
			{children}
		</Button>

	)
}

export default ClassicButton;