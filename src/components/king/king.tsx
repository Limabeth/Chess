import { FC } from 'react';
import { piecesImages as images } from '../../config/piecesImagesConfig';
import { useChessPiecesContext } from '../providers/ChessPiecesProvider';

interface KingProps {
  color: string | null;
}

const King: FC<KingProps> = (props: KingProps) => {
  const { whoseTurn } = useChessPiecesContext();

  const onMouseEnterHandler = (e: any) => {
    if (props.color !== whoseTurn) return;

    e.currentTarget.classList.add('chessboard__piece--highlighted');
  };

  const onMouseLeaveHandler = (e: any) => {
    if (props.color !== whoseTurn) return;

    e.currentTarget.classList.remove('chessboard__piece--highlighted');
  };

  let king: JSX.Element | null = null;

  if (props.color === 'white') {
    king = (
      <div
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        className='chessboard__piece chessboard__piece--white-king'
      >
        <img src={images.white_king} alt='King White' />
      </div>
    );
  } else if (props.color === 'black') {
    king = (
      <div
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        className='chessboard__piece chessboard__piece--black-king'
      >
        <img src={images.black_king} alt='King Black' />
      </div>
    );
  }

  return king;
};

export default King;
