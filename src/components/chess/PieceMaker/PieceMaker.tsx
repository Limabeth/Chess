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

  const pieceProps: PiecePropsType = {
    piece: {
      type: '',
      color: 'w',
      position: '',
    }
  };

  let pieceElement: JSX.Element | null = null;

  board.forEach((row: any) => {
    row.forEach((col: any) => {
      if (!col) return;

      const pieceCoords = col.square;

      if (pieceCoords === cellCoords) {
        pieceProps.piece.type = col.type;
        pieceProps.piece.color = col.color;
        pieceProps.piece.position = pieceCoords;

        return;
      }
    });
  });

  if (pieceProps.piece.type !== '') {
    pieceElement = <Piece piece={pieceProps.piece} />;
  }

  return pieceElement;
};

export default PieceMaker;
