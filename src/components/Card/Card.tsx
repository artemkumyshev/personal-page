import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

import styles from './Card.module.scss';

interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  padding?: boolean;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({
  padding = false,
  className,
  children,
  ...props
}): React.ReactElement => {
  return (
    <div
      className={cn(
        styles.Wrapper,
        { [styles['Wrapper_with-padding']]: padding },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
