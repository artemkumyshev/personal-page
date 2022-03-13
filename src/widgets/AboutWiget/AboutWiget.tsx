import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import ImageAvatar1 from './images/avatar-1.png';

import styles from './AboutWiget.module.scss';

interface AboutWigetProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const AboutWiget: React.FC<AboutWigetProps> = ({
  className,
}): React.ReactElement => {
  return (
    <div className={cn(styles.Wrapper, className)}>
      <div className={cn(styles.Avatar)}>
        <img src={ImageAvatar1} alt="Avatar" />
      </div>
      <div className={cn(styles.Action)}></div>

      <div className={cn(styles.Description)}>
        <p className={cn(styles.Description__text)}>
          Всеx приветствую! Меня зовут{' '}
          <span className={cn(styles.Description__name)}>Артем</span>.
          Я&nbsp;разработчик из&nbsp;России, из&nbsp;города Ростов-на-Дону.
        </p>
        <p className={cn(styles.Description__text)}>
          Стек технологий: ReactJS, NodeJS, MODX
        </p>
        <p className={cn(styles.Description__text)}>
          Опыт работы с&nbsp;2017 года
        </p>
      </div>
    </div>
  );
};

export default AboutWiget;
