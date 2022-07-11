import { FC } from 'react';
import { piecesImages as images } from '../../config/piecesImagesConfig';
import { useChessPiecesContext } from '../providers/ChessPiecesProvider';

interface KnightProps {
  color: string | null;
}

const Knight: FC<KnightProps> = (props: KnightProps) => {
  const { whoseTurn } = useChessPiecesContext();

  const onMouseEnterHandler = (e: any) => {
    if (props.color !== whoseTurn) return;

    e.currentTarget.classList.add('chessboard__piece--highlighted');
  };

  const onMouseLeaveHandler = (e: any) => {
    if (props.color !== whoseTurn) return;

    e.currentTarget.classList.remove('chessboard__piece--highlighted');
  };

  let knight: JSX.Element | null = null;

  if (props.color === 'white') {
    knight = (
      <div
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        className='chessboard__piece chessboard__piece--white-knight'
      >
        <img src={images.white_knight} alt='Knight White' />
      </div>
    );
  } else if (props.color === 'black') {
    knight = (
      <div
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        className='chessboard__piece chessboard__piece--black-knight'
      >
        <img src={images.black_knight} alt='Knight Black' />
      </div>
    );
  }

  return knight;
};

export default Knight;
