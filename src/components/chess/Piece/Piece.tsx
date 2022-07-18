import { FC, useState } from 'react';
import "./Piece.scss";
import { generatePieceClassName } from '../../../services/chess/generatePieceClassName';
import { useChessContext } from '../../providers/ChessProvider';
import { PiecePropsType } from '../../../types/chess/PiecePropsType';
import { chess } from '../../../libs/chess/chess';
import PieceIcon from '../PieceIcon/PieceIcon';

const Piece: FC<PiecePropsType> = (props: PiecePropsType) => {
  const { type, color, position } = props.piece;
  const { whoseTurn, setLegalMoves, selectedPiece, setSelectedPiece } = useChessContext();

  const selected = position === selectedPiece.position ? true : false

  const onClickHandler = () => {
    if (whoseTurn !== color) return;

    const possibleMoves = chess.moves({ square: position, verbose: true });

    if (!possibleMoves) return;

    setLegalMoves(possibleMoves);
    setSelectedPiece(props.piece)
  };

  let piece: JSX.Element | null = null;

  piece = (
    <div
      onClick={onClickHandler}
      className={generatePieceClassName(whoseTurn, color, selected)}
    >
      <PieceIcon type={type} color={color} />
    </div>
  );

  return piece;
};

export default Piece;
