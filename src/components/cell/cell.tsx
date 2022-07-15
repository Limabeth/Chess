import { FC, useEffect, useState } from 'react';
import PieceMaker from '../piece-maker/piece-maker';
import { useChessContext } from '../providers/ChessProvider';
import { chess } from '../../libs/chess/chess';
import { Square } from 'chess.js';
import { generateCellClassName } from '../../services/chess/generateCellClassName';
import { isCellLegal } from '../../services/chess/isCellLegal';

interface CellProps {
  coords: Square;
  color: string;
  key: string;
}

const Cell: FC<CellProps> = (props: CellProps) => {
  const { coords, color } = props;
  const [legal, setLegal] = useState(false);
  const [className, setClassName] = useState('');
  const { whoseTurn, setWhoseTurn, legalMoves, setLegalMoves, selectedPiece, setSelectedPiece, setBoard } = useChessContext();

  useEffect(() => {
    setLegal(false);

    if (isCellLegal(coords, legalMoves)) {
      setLegal(true);
    }

    setClassName(generateCellClassName(color, legal));
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

        setBoard(newBoard)
        setLegalMoves([]);
        setSelectedPiece('');
        setWhoseTurn(newTurn);
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
