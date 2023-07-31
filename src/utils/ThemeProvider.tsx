'use client'

import React, { createContext, useContext } from 'react'
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from '@/StylesRoot';
import { useThemeMode } from '@/UtilsRoot';

interface IThemeContext {
  theme: 'light' | 'dark',
  handleChangeTheme: () => void
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export function RootLayoutThemeProvider({
  children
}: {
  children: React.ReactNode
}) {

  const [theme, toggleTheme] = useThemeMode('dark');

  const handleChangeTheme = () => {
    toggleTheme();
  }

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      <ThemeProvider theme={themeMode}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext);