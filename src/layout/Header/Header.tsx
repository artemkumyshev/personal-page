import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import { Logo, ThemeToggle } from '../../components';

import styles from './Header.module.scss';

interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header: React.FC<HeaderProps> = ({
  className,
  ...props
}): React.ReactElement => {
  return (
    <header className={cn(styles.Wrapper, className)} {...props}>
      <Logo />
      <ThemeToggle className={cn(styles.Theme)} />
    </header>
  );
};
