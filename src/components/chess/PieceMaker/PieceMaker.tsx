import { FC } from 'react';
import { useChessContext } from '../../providers/ChessProvider';
import { TurnType } from '../../../types/chess/TurnType';
import { PiecePropsType } from '../../../types/chess/PiecePropsType';
import Piece from '../Piece/Piece';

interface PieceMakerProps {
  cellCoords: string;
}

const PieceMaker: FC<PieceMakerProps> = (props: PieceMakerProps) => {
  const { board } = useChessContext();

  const { cellCoords } = props;

  // Initialzie piece props with default values to avoid conflicts with types
  const pieceProps: PiecePropsType = {
    piece: {
      type: "p",
      color: 'w',
      position: 'a1',
    }
  };

  let piece: boolean = false;
  let pieceElement: JSX.Element | null = null;

  board.forEach((row: any) => {
    row.forEach((col: any) => {
      if (!col) return;

      const pieceCoords = col.square;

      if (pieceCoords === cellCoords) {
        piece = true;

        pieceProps.piece.type = col.type;
        pieceProps.piece.color = col.color;
        pieceProps.piece.position = pieceCoords;
      }
    });
  });

  if (piece) {
    pieceElement = <Piece piece={pieceProps.piece} />;
  }

  return pieceElement;
};

export default PieceMaker;
