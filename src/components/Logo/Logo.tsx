import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import { DATA_LOGO } from '../../configs/constants';

import styles from './Logo.module.scss';

interface LogoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const colors = [
  '#FFFFFF',
  '#0851B0',
  '#AD2C65',
  '#CD3E52',
  '#E26142',
  '#F29538',
];

const Logo: React.FC<LogoProps> = ({ className }): React.ReactElement => {
  return (
    <ul className={cn(styles.Logo, className)}>
      {colors.map((color, i) => (
        <li key={i} className={cn(styles.Logo__layer)} style={{ color }}>
          {DATA_LOGO.ru}
        </li>
      ))}
    </ul>
  );
};

export default Logo;
