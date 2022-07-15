import { FC } from 'react';
import { AXIS_X_CONFIG, AXIS_X_REVERSED_CONFIG } from '../../config/axisConfig';
import { useChessContext } from '../providers/ChessProvider';

const AxisX: FC = () => {
  const { whoseTurn } = useChessContext();

  const axis = whoseTurn === 'w' ? AXIS_X_CONFIG : AXIS_X_REVERSED_CONFIG;

  return (
    <div className='chessboard__axis-x'>
      {axis.map((item) => {
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
