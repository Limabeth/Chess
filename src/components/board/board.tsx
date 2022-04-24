import { FC } from 'react';
import Cell from '../cell/cell';

const Board: FC = () => {
  const boardMatrix: number[][] = [
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
  ];

  return (
    <div className='chessboard__board'>
      {boardMatrix.map((arr, arrIndex) => {
        return arr.map((cellType, cellIndex) => {
          const keyNumber: number = arrIndex * 10 + cellIndex;
          return <Cell type={cellType} key={keyNumber} />;
        });
      })}
    </div>
  );
};

export default Board;
