import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

interface ButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  theme?: 'default' | 'primary';
  disabled?: boolean;
  isIcon?: boolean;
  withIcon?: boolean;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  theme = 'default',
  disabled = false,
  isIcon = false,
  withIcon = false,
  className,
  children,
  ...props
}): React.ReactElement => {
  return (
    <button
      disabled={disabled}
      className={cn(
        styles.Button,
        {
          [styles[`Button_theme-${theme}`]]: theme !== 'default',
          [styles.Button_icon]: isIcon,
          [styles['Button_with-icon']]: withIcon,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
