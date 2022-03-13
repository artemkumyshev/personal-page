import React, { DetailedHTMLProps, HTMLAttributes, useState } from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import cn from 'classnames';

import { Button } from '../../components';

import styles from './MapWidget.module.scss';

interface MapWidgetProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const MapWidget: React.FC<MapWidgetProps> = ({
  className,
}): React.ReactElement => {
  const [zoomLevel, setZoomLevel] = useState<number>(12);

  return (
    <div className={cn(styles.Wrapper, className)}>
      <YMaps>
        <Map
          className={cn(styles.Map)}
          defaultState={{
            center: [47.221971, 39.720412],
            zoom: zoomLevel,
            type: 'yandex#map',
          }}
          state={{
            center: [47.221971, 39.720412],
            zoom: zoomLevel,
            type: 'yandex#map',
          }}
        ></Map>
      </YMaps>
      <div className={cn(styles.Zoom)}>
        <Button
          theme="primary"
          disabled={zoomLevel === 1}
          isIcon
          className={cn(styles.Zoom__minus)}
          onClick={() => setZoomLevel(zoomLevel - 1)}
        >
          -
        </Button>
        <Button
          theme="primary"
          isIcon
          className={cn(styles.Zoom__plus)}
          disabled={zoomLevel === 17}
          onClick={() => setZoomLevel(zoomLevel + 1)}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default MapWidget;
