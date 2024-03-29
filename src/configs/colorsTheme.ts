import { Theme } from '../context/ThemeContext';
type ColorMap = { [theme in Theme]: { [key: string]: string } };

const colors = {
  primary: '#e26142',
  secondary: '#f29538',
  third: '#0851b0',
  white: '#ffffff',
  black: '#1b1b1b',
  gray: '#4f4f4f',
  grayDark: '#242424',
  grayLight: '#ebebeb',
  buttonDefaultLight: '#E9EAED',
  buttonDefaultLightHover: '#E0E1E4',
  buttonDefaultLightActive: '#C9CACD',
  buttonDefaulDark: '#161512',
  buttonDefaulDarkHover: '#1f1e1b',
  buttonDefaulDarkActive: '#363532',
};

export const colorsTheme: ColorMap = {
  [Theme.LIGHT]: {
    'primary-color': colors.primary,
    'secondary-color': colors.secondary,
    'third-color': colors.third,
    'white-color': colors.white,
    'black-color': colors.black,
    'body-background': '#f4f5f9',
    'card-background': colors.white,
    'text-color': colors.black,
    'border-color': colors.gray,
    'shadow-color': colors.grayLight,
    'button-default-color': colors.buttonDefaultLight,
    'button-default-hover-color': colors.buttonDefaultLightHover,
    'button-default-active-color': colors.buttonDefaultLightActive,
    'button-primary-color': colors.primary,
    'button-primary-hover-color': '#ea907a',
    'button-primary-active-color': '#ca401f',
  },
  [Theme.DARK]: {
    'primary-color': colors.primary,
    'secondary-color': colors.secondary,
    'third-color': colors.third,
    'white-color': colors.white,
    'black-color': colors.black,
    'body-background': colors.black,
    'card-background': colors.grayDark,
    'text-color': colors.white,
    'border-color': colors.primary,
    'shadow-color': colors.grayDark,
    'button-default-color': colors.buttonDefaulDark,
    'button-default-hover-color': colors.buttonDefaulDarkHover,
    'button-default-active-color': colors.buttonDefaulDarkActive,
    'button-primary-color': colors.primary,
    'button-primary-hover-color': '#ea907a',
    'button-primary-active-color': '#ca401f',
  },
};
