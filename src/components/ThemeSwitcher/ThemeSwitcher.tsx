'use client';

import React from "react";
import Image from "next/image";

import { ThemeSwitcherWrapper, Switcher } from './ThemeSwitcher.styled';
import { useThemeMode } from "../../utils/hooks";

const ThemeSwitcher: React.FC = () => {
  const [theme, toggleTheme] = useThemeMode('dark');

  return (
    <ThemeSwitcherWrapper>
      <Image
        src='/icon-light-theme.svg'
        alt='icon-light-theme'
        width={20}
        height={20}
      />
      <Switcher>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={() => toggleTheme()}
        />
        <span />
      </Switcher>
      <Image
        src='/icon-dark-theme.svg'
        alt='icon-dark-theme'
        width={20}
        height={20}
      />
    </ThemeSwitcherWrapper>
  )
}

export default ThemeSwitcher;