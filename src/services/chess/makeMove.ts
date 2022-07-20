import { Square } from 'chess.js';
import { chess } from '../../libs/chess/chess';
import { PieceType } from '../../types/chess/PieceType';
import { TurnType } from '../../types/chess/TurnType';

type currentPieceType = {
  type: PieceType;
  color: TurnType;
  position: Square;
};

const makeMove = (
  selectedPiece: currentPieceType,
  turn: TurnType,
  toSquare: Square
) => {
  const { type: pieceType, position: piecePosition } = selectedPiece;

  const move: Object | null = chess.move({ to: toSquare, from: piecePosition });

  if (!move) return false;

  const newPiecePosition = chess.put(
    { type: pieceType, color: turn },
    toSquare
  );

  if (!newPiecePosition) return false;

  return true;
};

export { makeMove };
