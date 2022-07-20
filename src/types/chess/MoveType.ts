import { Square } from 'chess.js';
import { FlagsType } from './FlagsType';
import { TurnType } from './TurnType';
import { PieceType } from './PieceType';

type MoveType = {
  color: TurnType;
  flags: string;
  from: Square;
  to: Square;
  piece: PieceType;
  san: string;
};

export type { MoveType };
