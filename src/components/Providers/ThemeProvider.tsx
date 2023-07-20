'use client'

import React from 'react'
import { ThemeProvider } from "styled-components";

import { theme } from '@/src/styles/Theme';

export function RootLayoutThemeProvider({
  children
}: {
  children: React.ReactNode
}) {
  return (
    // <ThemeProvider disableTransitionOnChange defaultTheme='dark'>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
    // </ThemeProvider>
  )
}