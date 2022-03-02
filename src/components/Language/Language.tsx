import React, { DetailedHTMLProps, HTMLAttributes, useState } from 'react';
import cn from 'classnames';

import { DATA_LANGUAGE } from '../../configs/constants';

import styles from './Language.module.scss';

interface LanguageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Language: React.FC<LanguageProps> = ({
  className,
  ...props
}): React.ReactElement => {
  const [activeLanguage, setActiveLanguage] = useState<'ru' | 'en'>('ru');

  return (
    <div className={cn(styles.Wrapper, className)} {...props}>
      {DATA_LANGUAGE.ru.map((lang, index) => (
        <button
          type="button"
          key={index}
          className={cn(styles.Option, {
            [styles.Option_active]: activeLanguage === lang.code,
          })}
          onClick={() => setActiveLanguage(lang.code)}
          title={lang.title}
        >
          {lang.code}
        </button>
      ))}
    </div>
  );
};

export default Language;
