'use client'

import React, { createContext, useState, useEffect, PropsWithChildren } from "react";
import { brakePoints } from "@/ConstantsRoot";

interface IWindowSizeContext {
	isMobile: boolean,
	isTable: boolean,
	isDesktop: boolean,
}

const WindowSizeContext = createContext<IWindowSizeContext>({} as IWindowSizeContext);

export const WindowSizeProvider: React.FC<PropsWithChildren> = ({ children }) => {

	const isBrowser = typeof window !== undefined;

	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [isTable, setIsTable] = useState<boolean>(false);
	const [isDesktop, setIsDesktop] = useState<boolean>(false);

	const updateWindowSize = () => {
		setIsMobile(window.screen.width < brakePoints.MOBILE); //575
		setIsTable(window.screen.width < brakePoints.TABLET && window.screen.width >= brakePoints.MOBILE); //576 991 
		setIsDesktop(window.screen.width >= brakePoints.TABLET); //992
	}

	useEffect(() => {
		if (isBrowser) {
			window.addEventListener('resize', updateWindowSize);
		}

		return () => {
			window.removeEventListener('resize', updateWindowSize);
		}
	}, [isBrowser])

	return (
		<WindowSizeContext.Provider value={{ isMobile, isTable, isDesktop }}>
			{children}
		</WindowSizeContext.Provider>
	)
}