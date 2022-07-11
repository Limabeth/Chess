import { FC } from 'react';
import { piecesImages as images } from '../../config/piecesImagesConfig';
import { useChessPiecesContext } from '../providers/ChessPiecesProvider';

interface PawnProps {
  color: string | null;
}

const Pawn: FC<PawnProps> = (props: PawnProps) => {
  const { whoseTurn } = useChessPiecesContext();

  const onMouseEnterHandler = (e: any) => {
    if (props.color !== whoseTurn) return;

    e.currentTarget.classList.add('chessboard__piece--highlighted');
  };

  const onMouseLeaveHandler = (e: any) => {
    if (props.color !== whoseTurn) return;

    e.currentTarget.classList.remove('chessboard__piece--highlighted');
  };

  let pawn: JSX.Element | null = null;

  if (props.color === 'white') {
    pawn = (
      <div
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        className='chessboard__piece chessboard__piece--white-pawn'
      >
        <img src={images.white_pawn} alt='Pawn White' />
      </div>
    );
  } else if (props.color === 'black') {
    pawn = (
      <div
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        className='chessboard__piece chessboard__piece--black-pawn'
      >
        <img src={images.black_pawn} alt='Pawn Black' />
      </div>
    );
  }

  return pawn;
};

export default Pawn;
