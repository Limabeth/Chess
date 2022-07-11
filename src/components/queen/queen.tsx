import { FC } from 'react';
import { piecesImages as images } from '../../config/piecesImagesConfig';
import { useChessPiecesContext } from '../providers/ChessPiecesProvider';

interface QueenProps {
  color: string | null;
}

const Queen: FC<QueenProps> = (props: QueenProps) => {
  const { whoseTurn } = useChessPiecesContext();

  const onMouseEnterHandler = (e: any) => {
    if (props.color !== whoseTurn) return;

    e.currentTarget.classList.add('chessboard__piece--highlighted');
  };

  const onMouseLeaveHandler = (e: any) => {
    if (props.color !== whoseTurn) return;

    e.currentTarget.classList.remove('chessboard__piece--highlighted');
  };

  let queen: JSX.Element | null = null;

  if (props.color === 'white') {
    queen = (
      <div
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        className='chessboard__piece chessboard__piece--white-queen'
      >
        <img src={images.white_queen} alt='Queen White' />
      </div>
    );
  } else if (props.color === 'black') {
    queen = (
      <div
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        className='chessboard__piece chessboard__piece--black-queen'
      >
        <img src={images.black_queen} alt='Queen Black' />
      </div>
    );
  }

  return queen;
};

export default Queen;
