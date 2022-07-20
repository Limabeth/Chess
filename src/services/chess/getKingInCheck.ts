import { BoardElementType } from '../../types/chess/board/BoardElementType';
import { BoardSquareType } from '../../types/chess/board/BoardSquareType';
import { BoardType } from '../../types/chess/board/BoardType';
import { TurnType } from '../../types/chess/TurnType';

const getKingInCheck = (turn: TurnType, board: any) => {
  if (!board) return;

  let squareWithKing: BoardSquareType | null = null;

  board.forEach((arr: BoardElementType) => {
    if (!arr) return;

    arr.forEach((square: BoardSquareType) => {
      if (square && square.type === 'k' && square.color === turn) {
        squareWithKing = square;
      }
    });
  });

  return squareWithKing;
};

export { getKingInCheck };
