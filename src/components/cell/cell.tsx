import { FC } from 'react';

interface CellType {
  type: number;
}

const Cell: FC<CellType> = ({ type }: CellType) => {
  let cellElement: JSX.Element = <div className='chessboard__cell'></div>;

  if (type === 0) {
    cellElement = (
      <div className='chessboard__cell chessboard__cell--white'></div>
    );
  } else if (type === 1) {
    cellElement = (
      <div className='chessboard__cell chessboard__cell--black'></div>
    );
  }

  return cellElement;
};

export default Cell;
