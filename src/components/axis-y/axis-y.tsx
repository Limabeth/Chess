import { FC } from 'react';
import { configAxisY } from '../../config/axisConfig';

const AxisY: FC = () => {
  return (
    <div className='chessboard__axis-y'>
      {configAxisY.map((item) => {
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
