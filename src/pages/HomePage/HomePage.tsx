import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import ReactGridLayout from 'react-grid-layout';
import cn from 'classnames';

import { DATA_GRID_CARDS } from '../../configs/constants';

import styles from './HomePage.module.scss';
import { Card } from '../../components';

interface HomePageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const cardsList = Object.keys(DATA_GRID_CARDS).map((cardKey) => {
  const currentCard = DATA_GRID_CARDS[cardKey];

  return {
    i: cardKey,
    x: currentCard.row - 1,
    y: currentCard.column - 1,
    w: currentCard.size === '1x1' || currentCard.size === '1x2' ? 1 : 2,
    h: currentCard.size === '1x1' || currentCard.size === '2x1' ? 1 : 2,
  };
});

type SizeElement = '1x1' | '2x2' | '1x2' | '2x1';

interface IElement {
  i: number;
  size: SizeElement;
}

const elementList: IElement[] = [
  { i: 1, size: '1x1' },
  { i: 2, size: '1x1' },
  { i: 3, size: '1x1' },
  { i: 400, size: '2x1' },
  { i: 500, size: '2x1' },
  { i: 6, size: '1x1' },
  // { i: 3, size: '2x1' },
  // { i: 4, size: '2x1' },
  // { i: 4, size: '1x1' },
  // { i: 4, size: '1x2' },
  // { i: 4, size: '1x2' },
  // { i: 4, size: '2x2' },
  // { i: 4, size: '1x2' },
];

export const HomePage: React.FC<HomePageProps> = ({
  className,
  ...props
}): React.ReactElement => {
  const drawMap = (workingArray: IElement[]) => {
    const matrix = [Array(4).fill(0)];
    const columns = 4;
    let starIndexElementArray: number = 0;

    for (let r = 0; r < matrix.length; r++) {
      const rowArray = matrix[r];

      for (let c = 0; c < columns; c++) {
        const cell = rowArray[c];
        if (cell === 0) {
          console.log();

          if (workingArray[starIndexElementArray].size === '1x1') {
            matrix[r][c] = workingArray[starIndexElementArray].i;
          } else if (workingArray[starIndexElementArray].size === '2x1') {
            if (matrix[r][c] && matrix[r][c + 1]) {
              matrix[r][c] = workingArray[starIndexElementArray].i;
              matrix[r][c + 1] = workingArray[starIndexElementArray].i;
            }
          }
        }

        starIndexElementArray++;
      }

      console.log('----------------------');
    }

    return matrix;
  };

  console.log(drawMap(elementList));

  return (
    <div className={cn(styles.Wrapper, className)} {...props}>
      <div className="container">
        <ReactGridLayout
          className="layout"
          isDraggable={true}
          isResizable={false}
          cols={4}
          width={1110}
          rowHeight={288}
          layout={cardsList}
          margin={[30, 30]}
        >
          <div key="bio">
            <Card>BIO</Card>
          </div>
          <div key="switchTheme">
            <Card>switchTheme</Card>
          </div>
          <div key="instagram">
            <Card>instagram</Card>
          </div>
        </ReactGridLayout>
      </div>
    </div>
  );
};
