import { FC } from 'react';
import { piecesImages as images } from '../../config/piecesImagesConfig';

interface PieceIconProps {
  type: string;
  color: string;
}

const Pawn: FC<PieceIconProps> = (props: PieceIconProps) => {
  const { type, color } = props;

  let imgSrc: string = '';

  if (color === 'w') {
    switch (type) {
      case 'p':
        imgSrc = images.white_pawn;
        break;
      case 'n':
        imgSrc = images.white_knight;
        break;
      case 'b':
        imgSrc = images.white_bishop;
        break;
      case 'r':
        imgSrc = images.white_rook;
        break;
      case 'q':
        imgSrc = images.white_queen;
        break;
      case 'k':
        imgSrc = images.white_king;
        break;
      default:
        break;
    }
  } else if (color === 'b') {
    switch (type) {
      case 'p':
        imgSrc = images.black_pawn;
        break;
      case 'n':
        imgSrc = images.black_knight;
        break;
      case 'b':
        imgSrc = images.black_bishop;
        break;
      case 'r':
        imgSrc = images.black_rook;
        break;
      case 'q':
        imgSrc = images.black_queen;
        break;
      case 'k':
        imgSrc = images.black_king;
        break;
      default:
        break;
    }
  }

  return <img src={imgSrc} alt='Chess Piece' />;
};

export default Pawn;
