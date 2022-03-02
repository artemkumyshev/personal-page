import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import { DATA_LOGO } from '../../configs/constants';

import { Filters, Language } from '../../components';

import styles from './Header.module.scss';

interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header: React.FC<HeaderProps> = ({
  className,
  ...props
}): React.ReactElement => {
  return (
    <header className={cn(styles.Wrapper, className)} {...props}>
      <div className={styles.Logo}>{DATA_LOGO.ru}</div>
      <Filters className={styles.Filters} />
      <div className={styles.Actions}>
        <div className={cn(styles.Actions__item, styles.Language)}>
          <Language />
        </div>
        <div className={cn(styles.Actions__item, styles.Contact)}>
          Связаться
        </div>
      </div>
    </header>
  );
};
