import { ReactNode, useState } from 'react';

import { Theme, ThemeContext } from '../context/ThemeContext';
import { changeCssRootVariables } from '../helpers/changeCssRootVariables';
import { storage } from '../helpers/storage';

interface IThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children, ...props }: IThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(
    storage.getItem('theme') || Theme.LIGHT
  );

  changeCssRootVariables(theme);

  function changeTheme(theme: Theme) {
    storage.setItem('theme', theme);
    setTheme(theme);
    changeCssRootVariables(theme);
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }} {...props}>
      {children}
    </ThemeContext.Provider>
  );
};
