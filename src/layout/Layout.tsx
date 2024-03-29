import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import { Header } from './Header';

import styles from './Layout.module.scss';

interface LayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return (
    <div className={styles.Wrapper} {...props}>
      <div className={styles.Aside}></div>
      <Header className={styles.Header} />
      <main className={styles.Main}>{children}</main>
      <footer className={styles.Footer}>footer</footer>
    </div>
  );
};

export default Layout;
