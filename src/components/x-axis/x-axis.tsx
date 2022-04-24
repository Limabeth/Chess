import { FC } from 'react';

const AxisX: FC = () => {
  const axisX: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  
  return (
    <div className='chessboard__axis-x'>
      {axisX.map((item) => {
        const letterCell: JSX.Element = (
          <div className='chessboard__letter-cell' key={item}>
            {item}
          </div>
        );
        return letterCell;
      })}
    </div>
  );
};

export default AxisX;
