import React, { useState } from "react";

import { Switcher } from './ThemeSwitcher.style';

const ThemeSwitcher: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <Switcher>
      <input type="checkbox" checked={isToggled} onChange={() => { setIsToggled(!isToggled) }} />
      <span />
    </Switcher>
  )
}

export default ThemeSwitcher;