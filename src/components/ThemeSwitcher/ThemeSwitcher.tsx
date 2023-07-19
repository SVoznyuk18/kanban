import React, { useState } from "react";
import Image from "next/image";
import { ThemeSwitcherWrapper, Switcher } from './ThemeSwitcher.style';

const ThemeSwitcher: React.FC = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  return (
    <ThemeSwitcherWrapper>
      <Image
        src='/icon-light-theme.svg'
        alt='icon-light-theme'
        width={20}
        height={20}
      />
      <Switcher>
        <input type="checkbox" checked={isToggled} onChange={() => { setIsToggled(!isToggled) }} />
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