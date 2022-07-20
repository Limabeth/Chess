import { FC, useEffect } from 'react';
import AxisX from '../AxisX/AxisX';
import AxisY from '../AxisY/AxisY';
import Board from '../Board/Board';
import FillerCell from '../FillerCell/FillerCell';
import { useChessContext } from '../../providers/ChessProvider';
import './Chess.scss';

const Chess: FC = () => {
  const { board, legalMoves } = useChessContext();


  return (
    <section className='chess'>
      <div className='chess__container'>
        <div className='chess__content'>
          <FillerCell />
          <AxisX />
          <AxisY />
          <Board />
        </div>
      </div>
    </section>
  );
};

export default Chess;
