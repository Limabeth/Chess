import { FC } from 'react';
import './AxisY.scss';
import { AXIS_Y_CONFIG } from '../../../config/AXIS_Y_CONFIG';
import { AXIS_Y_REVERSED_CONFIG } from '../../../config/AXIS_Y_REVERSED_CONFIG';
import { useChessContext } from '../../providers/ChessProvider';

const AxisY: FC = () => {
  const { whoseTurn } = useChessContext();

  const axis = whoseTurn === 'w' ? AXIS_Y_CONFIG : AXIS_Y_REVERSED_CONFIG;

  return (
    <div className='chess-axis-y'>
      {axis.map((item) => {
        const numberCell: JSX.Element = (
          <div className='chess-axis-y__number-cell' key={item}>
            {item}
          </div>
        );
        return numberCell;
      })}
    </div>
  );
};

export default AxisY;
