// import { FC } from 'react';
import { useChessPiecesContext } from '../providers/ChessPiecesProvider';
import Pawn from '../pawn/pawn';
import Bishop from '../bishop/bishop';
import Knight from '../knight/knight';
import Rook from '../rook/rook';
import Queen from '../queen/queen';
import King from '../king/king';

const PieceMaker = (props: any) => {
  const { chessPieces } = useChessPiecesContext();

  let chessPiece: string = '';
  let chessPieceElement: JSX.Element | null = null;

  Object.entries(chessPieces).forEach(([coords, piece]) => {
    const pieceCoords: string = coords;
    if (props.cellCoords === pieceCoords) {
      chessPiece = piece;
    }
  });

  switch (chessPiece) {
    case 'white_pawn':
      chessPieceElement = <Pawn color='white' />;
      break;
    case 'black_pawn':
      chessPieceElement = <Pawn color='black' />;
      break;
    case 'white_knight':
      chessPieceElement = <Bishop color='white' />;
      break;
    case 'black_knight':
      chessPieceElement = <Bishop color='black' />;
      break;
    case 'white_bishop':
      chessPieceElement = <Knight color='white' />;
      break;
    case 'black_bishop':
      chessPieceElement = <Knight color='black' />;
      break;
    case 'white_rook':
      chessPieceElement = <Rook color='white' />;
      break;
    case 'black_rook':
      chessPieceElement = <Rook color='black' />;
      break;
    case 'white_queen':
      chessPieceElement = <Queen color='white' />;
      break;
    case 'black_queen':
      chessPieceElement = <Queen color='black' />;
      break;
    case 'white_king':
      chessPieceElement = <King color='white' />;
      break;
    case 'black_king':
      chessPieceElement = <King color='black' />;
      break;
    default:
      break;
  }

  return chessPieceElement;
};

export default PieceMaker;
