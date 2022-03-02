import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';
import cn from 'classnames';

import styles from './Card.module.scss';

interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Card: React.FC<CardProps> = ({
  className,
  ...props
}): React.ReactElement => {
  return <div className={cn(styles.Wrapper, className)} {...props}></div>;
};

export default Card;
