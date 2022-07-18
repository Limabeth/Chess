import { FC } from 'react';
import "./AxisX.scss";
import { AXIS_X_CONFIG } from '../../../config/AXIS_X_CONFIG';
import { AXIS_X_REVERSED_CONFIG } from '../../../config/AXIS_X_REVERSED_CONFIG';
import { useChessContext } from '../../providers/ChessProvider';

const AxisX: FC = () => {
  const { whoseTurn } = useChessContext();

  const axis = whoseTurn === 'w' ? AXIS_X_CONFIG : AXIS_X_REVERSED_CONFIG;

  return (
    <div className='chess-axis-x'>
      {axis.map((item) => {
        const letterCell: JSX.Element = (
          <div className='chess-axis-x__letter-cell' key={item}>
            {item}
          </div>
        );
        return letterCell;
      })}
    </div>
  );
};

export default AxisX;
