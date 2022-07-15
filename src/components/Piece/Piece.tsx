import { FC, useState } from 'react';
import { generatePieceClassName } from '../../services/chess/generatePieceClassName';
import { useChessContext } from '../providers/ChessProvider';
import { pieceProps } from '../../types/chess/pieceProps';
import { chess } from '../../libs/chess/chess';
import { getLegalMoves } from '../../services/chess/getLegalMoves';
import PieceIcon from '../PieceIcon/PieceIcon';

const Piece: FC<pieceProps> = (props: pieceProps) => {
  const { type, color, position } = props.piece;
  const { whoseTurn, setLegalMoves, selectedPiece, setSelectedPiece } = useChessContext();

  const selected = position === selectedPiece.position ? true : false

  const onClickHandler = () => {
    if (whoseTurn !== color) return;

    const possibleMoves = chess.moves({ square: position, verbose: true });

    if (!possibleMoves) return;

    const newLegalMoves = getLegalMoves(possibleMoves);

    setLegalMoves(newLegalMoves);
    setSelectedPiece(props.piece);
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
