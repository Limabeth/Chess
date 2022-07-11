import { FC } from 'react';
import { configAxisX } from '../../config/axisConfig';

const AxisX: FC = () => {
  return (
    <div className='chessboard__axis-x'>
      {configAxisX.map((item) => {
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
