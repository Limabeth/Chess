import { Square } from 'chess.js';
import { FlagsType } from '../../types/chess/FlagsType';
import { MoveType } from '../../types/chess/MoveType';
import { SquareCheckType } from '../../types/chess/SquareCheckType';

const checkSquare = (
  coords: Square,
  moves: Array<MoveType>,
  squareInCheck: any
) => {
  let check: SquareCheckType = { legal: false, flags: [], inCheck: false };

  moves.forEach((move: MoveType) => {
    if (coords === move.to) {
      check.legal = true;
      check.flags = move?.flags.split('');
    }
  });

  if (!squareInCheck) {
    return check;
  }

  if (coords === squareInCheck.square) {
    check.inCheck = true;
  }

  return check;
};

export { checkSquare };
