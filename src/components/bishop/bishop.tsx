import { FC } from 'react';
import { piecesImages as images } from '../../config/piecesImagesConfig';
import { useChessPiecesContext } from '../providers/ChessPiecesProvider';

interface BishopProps {
  color: string | null;
}

const Bishop: FC<BishopProps> = (props: BishopProps) => {
  const { whoseTurn } = useChessPiecesContext();

  const onMouseEnterHandler = (e: any) => {
    if (props.color !== whoseTurn) return;

    e.currentTarget.classList.add('chessboard__piece--highlighted');
  };

  const onMouseLeaveHandler = (e: any) => {
    if (props.color !== whoseTurn) return;

    e.currentTarget.classList.remove('chessboard__piece--highlighted');
  };

  let bishop: JSX.Element | null = null;

  if (props.color === 'white') {
    bishop = (
      <div
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        className='chessboard__piece chessboard__piece--white-bishop'
      >
        <img src={images.white_bishop} alt='Bishop White' />
      </div>
    );
  } else if (props.color === 'black') {
    bishop = (
      <div
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
        className='chessboard__piece chessboard__piece--black-bishop'
      >
        <img src={images.black_bishop} alt='Bishop Black' />
      </div>
    );
  }

  return bishop;
};

export default Bishop;
