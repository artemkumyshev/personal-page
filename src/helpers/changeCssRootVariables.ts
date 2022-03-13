import { colorsTheme } from '../configs/colorsTheme';
import { Theme } from '../context/ThemeContext';

export function changeCssRootVariables(theme: Theme) {
  const root = document.querySelector(':root') as HTMLElement;

  const components = colorsTheme[theme];

  for (var key in components) {
    root.style.setProperty(`--${key}`, components[key]);
  }
}
