import { FC } from 'react';
import { useChessContext } from '../providers/ChessProvider';
import Piece from "../Piece/Piece";

interface PieceMakerProps {
  cellCoords: string;
}

const PieceMaker: FC<PieceMakerProps> = (props: PieceMakerProps) => {
  const { board } = useChessContext();

  const { cellCoords } = props;

  const piece = {
    type: '',
    color: '',
    position: '',
  }

  let pieceElement: JSX.Element | null = null;

  board.forEach((row: any) => {
    row.forEach((col: any) => {
      if (!col) return;

      const pieceCoords = col.square;

      if (pieceCoords === cellCoords) {
        piece.type = col.type;
        piece.color = col.color;
        piece.position = pieceCoords;

        return;
      }
    });
  });

  if (piece.type !== '') {
    pieceElement = <Piece piece={piece} />;

  }

  return pieceElement;
};

export default PieceMaker;
