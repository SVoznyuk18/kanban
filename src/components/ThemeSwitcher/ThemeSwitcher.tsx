'use client';

import React, { useContext } from "react";
import Image from "next/image";

import { ThemeSwitcherWrapper, Switcher } from './ThemeSwitcher.styled';
import { ThemeContext } from "@/LibRoot";

const ThemeSwitcher: React.FC = () => {

  const { handleChangeTheme, theme } = useContext(ThemeContext);
  console.log('ThemeSwitcher', theme)
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
          onChange={() => handleChangeTheme()}
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