import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';
import cn from 'classnames';

import { DATA_OPTIONS } from '../../configs/constants';

import styles from './Filters.module.scss';

interface FiltersProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Filters: React.FC<FiltersProps> = ({
  className,
  ...props
}): React.ReactElement => {
  const [activeOption, setActiveOption] = useState<number>(0);
  const [activeOptionStyles, setActiveOptionStyles] = useState({
    width: 0,
    left: 0,
  });
  const optionRefs = useRef(new Array());

  useEffect(() => {
    const currentOption = optionRefs.current[activeOption];

    setActiveOptionStyles({
      width: currentOption.offsetWidth,
      left: currentOption.offsetLeft,
    });
  }, [activeOption]);

  return (
    <div className={cn(styles.Wrapper, className)} {...props}>
      <div
        className={styles.Highlight}
        style={{
          width: activeOptionStyles.width,
          left: activeOptionStyles.left,
        }}
      ></div>
      {DATA_OPTIONS.ru.map((option, index) => {
        return (
          <button
            type="button"
            key={index}
            ref={(option) => (optionRefs.current[index] = option)}
            className={cn(styles.Option, {
              [styles.Option_active]: index === activeOption,
            })}
            onClick={() => setActiveOption(index)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default Filters;
