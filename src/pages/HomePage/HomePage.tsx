import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';
import ReactGridLayout from 'react-grid-layout';
import cn from 'classnames';

import useCalculateLayout, {
  IDataItem,
  ILayoutItem,
} from '../../hooks/useCalculateLayout';

import { AboutWiget, MapWidget } from '../../widgets';

import { Card } from '../../components';

import styles from './HomePage.module.scss';

interface HomePageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const dataElements: IDataItem[] = [
  { i: 1, shape: '2x1', component: <AboutWiget />, padding: true },
  { i: 2, shape: '1x1', component: <MapWidget /> },
];

export const HomePage: React.FC<HomePageProps> = ({
  className,
  ...props
}): React.ReactElement => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [widthGrid, setWidthGrid] = useState(0);
  const layout: ILayoutItem[] = useCalculateLayout(dataElements);

  const margin = 20;

  useEffect(() => {
    setWidthGrid(wrapperRef.current ? wrapperRef.current?.offsetWidth : 0);

    window.addEventListener('resize', () => {
      setWidthGrid(wrapperRef.current ? wrapperRef.current?.offsetWidth : 0);
    });
  }, [wrapperRef]);

  return (
    <div ref={wrapperRef} className={cn(styles.Wrapper, className)} {...props}>
      <div className={cn(styles.Grid)} style={{ marginBottom: 20 }}>
        <ReactGridLayout
          className="layout"
          isDraggable={true}
          isResizable={false}
          cols={4}
          width={widthGrid}
          rowHeight={
            wrapperRef.current ? wrapperRef.current?.offsetWidth / 4 - 24 : 0
          }
          layout={layout}
          margin={[margin, margin]}
        >
          {layout.map((item) => (
            <Card key={item.i} padding={item.padding}>
              {item.component}
            </Card>
          ))}
        </ReactGridLayout>
      </div>
    </div>
  );
};
