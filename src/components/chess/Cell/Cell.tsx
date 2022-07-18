import { FC, useEffect, useState } from 'react';
import './Cell.scss';
import PieceMaker from '../PieceMaker/PieceMaker';
import { useChessContext } from '../../providers/ChessProvider';
import { chess } from '../../../libs/chess/chess';
import { Square } from 'chess.js';
import { generateCellClassName } from '../../../services/chess/generateCellClassName';
import { isCellLegal } from '../../../services/chess/isCellLegal';
import { showKingInCheck } from '../../../services/chess/showKingInCheck';

interface CellProps {
  coords: Square;
  color: string;
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
    inCheck,
    setInCheck,
  } = useChessContext();

  const check = isCellLegal(coords, legalMoves, inCheck);
  const className = generateCellClassName(color, check);

  useEffect(() => {
    setLegal(false);

    if (check.legal) {
      setLegal(true);
    }
  });

  const onClickHandler = () => {
    if (!legal) return;

    const newMove: Object | null = chess.move(
      `${selectedPiece.position}${coords}`,
      { sloppy: true }
    );

    if (newMove) {
      const isPiecePlaced = chess.put(
        { type: selectedPiece.type, color: whoseTurn },
        coords
      );

      if (isPiecePlaced) {
        const newBoard = chess.board();
        const newTurn = chess.turn();

        setBoard(newBoard);
        setLegalMoves([]);
        setSelectedPiece('');
        setWhoseTurn(newTurn);
        setInCheck(null);
      }

      if (chess.in_check()) {
        console.log(chess.board());
        const square = showKingInCheck(chess.turn(), chess.board());
        setInCheck(square);
      }
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
