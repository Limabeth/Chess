import { Square } from 'chess.js';
import { PieceType } from './PieceType';
import { TurnType } from './TurnType';

type PiecePropsType = {
  piece: {
    type: PieceType;
    color: TurnType;
    position: Square;
  };
};

export type { PiecePropsType };
