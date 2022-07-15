import { FC } from 'react';
import { AXIS_Y_CONFIG, AXIS_Y_REVERSED_CONFIG } from '../../config/axisConfig';
import { useChessContext } from '../providers/ChessProvider';

const AxisY: FC = () => {
  const {whoseTurn} = useChessContext();

  const axis = whoseTurn === "w" ? AXIS_Y_CONFIG : AXIS_Y_REVERSED_CONFIG;

  return (
    <div className='chessboard__axis-y'>
      {axis.map((item) => {
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
