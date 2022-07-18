import { Square } from 'chess.js';

type SquareCheck = {
  legal: boolean;
  flags: Array<string>;
};

const isCellLegal = (
  coords: Square,
  moves: Array<Object>,
  squareInCheck: any
) => {
  let check = { legal: false, flags: [], inCheck: false };

  moves.forEach((move: any) => {
    if (coords === move.to) {
      console.log(move);
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

export { isCellLegal };
