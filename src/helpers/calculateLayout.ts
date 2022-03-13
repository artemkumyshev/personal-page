// Типизация

type DescShapes = '1x1' | '2x1' | '1x2' | '2x2';
type DescShapeMap = { [shape in DescShapes]: IDescShapeOption };
interface IDescShapeOption {
  width: number;
  height: number;
}
export interface IDataItem {
  i: number;
  shape: DescShapes;
}

// Данные для работы

const COLUMNS = 4;
const shapes: DescShapeMap = {
  '1x1': {
    width: 1,
    height: 1,
  },
  '2x1': {
    width: 2,
    height: 1,
  },
  '1x2': {
    width: 1,
    height: 2,
  },
  '2x2': {
    width: 2,
    height: 2,
  },
};

const findCoordsForRecord = (matrix: number[][], shape: DescShapes) => {
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      if (shape === '1x1') {
        if (matrix[row][column] === 0) {
          return [
            {
              row,
              column,
            },
          ];
        }
      }
      if (shape === '2x1') {
        if (matrix[row][column] === 0 && matrix[row][column + 1] === 0) {
          return [
            {
              row: row,
              column: column,
            },
            {
              row: row,
              column: column + 1,
            },
          ];
        }
      }
      if (shape === '1x2') {
        if (matrix[row][column] === 0 && matrix[row + 1][column] === 0) {
          return [
            {
              row: row,
              column: column,
            },
            {
              row: row + 1,
              column: column,
            },
          ];
        }
      }
      if (shape === '2x2') {
        if (
          matrix[row][column] === 0 &&
          matrix[row][column + 1] === 0 &&
          matrix[row + 1][column] === 0 &&
          matrix[row + 1][column + 1] === 0
        ) {
          return [
            {
              row: row,
              column: column,
            },
            {
              row: row,
              column: column + 1,
            },
            {
              row: row + 1,
              column: column,
            },
            {
              row: row + 1,
              column: column + 1,
            },
          ];
        }
      }
    }
  }

  return undefined;
};

const convertToResult = (
  data: IDataItem[]
): { i: string; x: number; y: number; w: number; h: number }[] => {
  const result = [];
  const checkArray = [Array(COLUMNS).fill(0)];
  let indexDataStart: number = 0;

  for (let row = 0; row < checkArray.length; row++) {
    for (let col = 0; col < checkArray[row].length; col++) {
      if (data[indexDataStart]) {
        if (
          shapes[data[indexDataStart].shape].height === 2 &&
          checkArray.length <= 2
        ) {
          checkArray.push(Array(COLUMNS).fill(0));
        }
        if (
          shapes[data[indexDataStart].shape].height === 2 &&
          checkArray.length % 2 !== 0
        ) {
          checkArray.push(Array(COLUMNS).fill(0));
        }

        if (col === 3) {
          checkArray.push(Array(COLUMNS).fill(0));
        }

        if (checkArray[row][3] !== 0) {
          checkArray.push(Array(COLUMNS).fill(0));
        }

        const toRecord = findCoordsForRecord(
          checkArray,
          data[indexDataStart].shape
        );

        if (toRecord) {
          checkArray[toRecord[0].row][toRecord[0].column] =
            data[indexDataStart].i;
          if (toRecord[1]) {
            checkArray[toRecord[1].row][toRecord[1].column] =
              data[indexDataStart].i;
          }
          if (toRecord[2]) {
            checkArray[toRecord[2].row][toRecord[2].column] =
              data[indexDataStart].i;
          }
          if (toRecord[3]) {
            checkArray[toRecord[3].row][toRecord[3].column] =
              data[indexDataStart].i;
          }

          result.push({
            i: data[indexDataStart].i.toString(),
            x: toRecord[0].column,
            y: toRecord[0].row,
            w: shapes[data[indexDataStart].shape].width,
            h: shapes[data[indexDataStart].shape].height,
          });
        }
      }

      indexDataStart++;
    }
  }

  return result;
};

export default convertToResult;
