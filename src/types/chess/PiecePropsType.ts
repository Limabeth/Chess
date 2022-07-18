import { TurnType } from './TurnType';

type PiecePropsType = {
  piece: {
    type: string;
    color: TurnType;
    position: string;
  };
};

export type { PiecePropsType };
