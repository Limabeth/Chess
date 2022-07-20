import { FC, useEffect, useState } from 'react';
import './Cell.scss';
import PieceMaker from '../PieceMaker/PieceMaker';
import { useChessContext } from '../../providers/ChessProvider';
import { chess } from '../../../libs/chess/chess';
import { Square } from 'chess.js';
import { generateCellClassName } from '../../../services/chess/generateCellClassName';
import { checkSquare } from '../../../services/chess/checkSquare';
import { getKingInCheck } from '../../../services/chess/getKingInCheck';
import { CellColorType } from '../../../types/chess/CellColorType';
import { TurnType } from '../../../types/chess/TurnType';
import { BoardType } from '../../../types/chess/board/BoardType';
import { makeMove } from '../../../services/chess/makeMove';

interface CellProps {
  coords: Square;
  color: CellColorType;
  key: string;
}

const Cell: FC<CellProps> = (props: CellProps) => {
  const { coords, color } = props;
  const [legal, setLegal] = useState(false);
  const {
    whoseTurn,
    setWhoseTurn,
    legalMoves,
    setLegalMoves,
    selectedPiece,
    setSelectedPiece,
    setBoard,
    kingInCheck,
    setKingInCheck,
  } = useChessContext();

  const check = checkSquare(coords, legalMoves, kingInCheck);
  const className = generateCellClassName(color, check);

  useEffect(() => {
    setLegal(false);

    if (check.legal) {
      setLegal(true);
    }
  });

  const onClickHandler = () => {
    if (!legal) return;

    let newBoard = null;
    let newTurn = null;

    if (makeMove(selectedPiece, whoseTurn, coords)) {
      newBoard = chess.board();
      newTurn = chess.turn();

      setBoard(newBoard);
      setLegalMoves([]);
      setSelectedPiece('');
      setWhoseTurn(newTurn);
      setKingInCheck(null);
    }

    if (chess.in_check()) {
      const square = getKingInCheck(chess.turn(), newBoard);
      setKingInCheck(square);
    }
  };

  let cellElement: JSX.Element | null = null;
  let chessPieceElement: JSX.Element | null = (
    <PieceMaker cellCoords={coords} />
  );

  cellElement = (
    <div onClick={onClickHandler} className={className}>
      {chessPieceElement}
    </div>
  );

  return cellElement;
};

export default Cell;
