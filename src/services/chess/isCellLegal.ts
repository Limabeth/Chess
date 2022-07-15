import { Square } from "chess.js";

const isCellLegal = (coords: Square, moves: Array<string>) => {
  let isLegal = false;

  moves.forEach((move: any) => {
    if (coords === move) {
      isLegal = true;
    }
  });

  return isLegal;
};

export { isCellLegal };
