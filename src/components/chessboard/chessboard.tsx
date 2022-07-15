import { FC, useEffect } from 'react';
import AxisX from '../axis-x/axis-x';
import AxisY from '../axis-y/axis-y';
import Board from '../board/board';
import FillerCell from '../filler-cell/filler-cell';
import { useChessContext } from '../providers/ChessProvider';
import './chessboard.scss';

const Chessboard: FC = () => {
  const { board, legalMoves } = useChessContext();

  useEffect(() => {}, [legalMoves]);

  return (
    <section className='chessboard'>
      <div className='chessboard__container'>
        <div className='chessboard__content'>
          <FillerCell />
          <AxisX />
          <AxisY />
          <Board />
        </div>
      </div>
    </section>
  );
};

export default Chessboard;
