import { FC } from 'react';
import AxisX from '../axis-x/axis-x';
import AxisY from '../axis-y/axis-y';
import Board from '../board/board';
import FillerCell from '../filler-cell/filler-cell';
import './chessboard.scss';

const Chessboard: FC = () => {
  return (
    <section className='chessboard'>
      <div className='chessboard__container'>
        <div className='chessboard__content'>
          <FillerCell/>
          <AxisX />
          <AxisY />
          <Board />
        </div>
      </div>
    </section>
  );
};

export default Chessboard;
