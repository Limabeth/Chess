import { FC } from 'react';
import PieceMaker from '../piece-maker/piece-maker';

interface CellProps {
  coords: Object;
  color: string | null;
  key: string;
}

const Cell: FC<CellProps> = (props: CellProps) => {
  let cellClassName: string = '';
  let cellElement: JSX.Element | null = null;
  let chessPieceElement: JSX.Element | null = (
    <PieceMaker cellCoords={props.coords} />
  );

  if (props.color === 'white') {
    cellClassName = `chessboard__cell chessboard__cell--white ${props.coords}`;
  } else if (props.color === 'black') {
    cellClassName = `chessboard__cell chessboard__cell--black ${props.coords}`;
  }

  cellElement = <div className={cellClassName}>{chessPieceElement}</div>;

  return cellElement;
};

export default Cell;
