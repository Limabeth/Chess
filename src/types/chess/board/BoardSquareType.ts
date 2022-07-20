import { Square } from "chess.js";
import { PieceType } from "../PieceType";
import { TurnType } from "../TurnType";

type BoardSquareType = {
  square: Square;
  type: PieceType;
  color: TurnType;
};

export type { BoardSquareType };
