import { FC } from 'react';

const AxisY: FC = () => {
  const axisY: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className='chessboard__axis-y'>
      {axisY.map((item) => {
        const numberCell: JSX.Element = (
          <div className='chessboard__number-cell' key={item}>
            {item}
          </div>
        );
        return numberCell;
      })}
    </div>
  );
};

export default AxisY;
