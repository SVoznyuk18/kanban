'use client'

import React, { createContext, useContext, PropsWithChildren } from 'react'
import { ThemeProvider } from "styled-components";

import { theme, lightTheme, darkTheme } from '@/StylesRoot';
import { useThemeMode } from './hooks';

interface IThemeContext {
  theme: 'light' | 'dark',
  handleChangeTheme: () => void
}
const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeChangeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, toggleTheme] = useThemeMode('dark');

  const handleChangeTheme = () => {
    toggleTheme();
  }

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext);

export function RootLayoutThemeProvider({
  children
}: {
  children: React.ReactNode
}) {

  const { theme } = useThemeContext();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    // <ThemeProvider disableTransitionOnChange defaultTheme='dark'>
    <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
    // </ThemeProvider>
  )
}