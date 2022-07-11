import { FC } from 'react';
import { piecesImages as images } from '../../config/piecesImagesConfig';
import { useChessPiecesContext } from '../providers/ChessPiecesProvider';

interface RookProps {
  color: string | null;
}

const Rook: FC<RookProps> = (props: RookProps) => {
  const { whoseTurn } = useChessPiecesContext();

  const onMouseEnterHandler = (e: any) => {
    if (props.color !== whoseTurn) return;

    e.currentTarget.classList.add('chessboard__piece--highlighted');
  };

  const onMouseLeaveHandler = (e: any) => {
    if (props.color !== whoseTurn) return;

    e.currentTarget.classList.remove('chessboard__piece--highlighted');
  };

  let rook: JSX.Element | null = null;

  if (props.color === 'white') {
    rook = (
      <div
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        className='chessboard__piece chessboard__piece--white-rook'
      >
        <img src={images.white_rook} alt='Rook White' />
      </div>
    );
  } else if (props.color === 'black') {
    rook = (
      <div
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        className='chessboard__piece chessboard__piece--black-rook'
      >
        <img src={images.black_rook} alt='Rook Black' />
      </div>
    );
  }

  return rook;
};

export default Rook;
