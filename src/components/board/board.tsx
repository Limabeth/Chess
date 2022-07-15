import { FC, useEffect } from 'react';
import Cell from '../cell/cell';
import { useChessContext } from '../providers/ChessProvider';
import { getCellColor } from '../../services/chess/getCellColor';
import { BOARD_CONFIG } from '../../config/BOARD_CONFIG';
import { BOARD_REVERSED_CONFIG } from '../../config/BOARD_CONFIG_REVERSED';
import { Square } from 'chess.js';
import { generateBoardClassName } from '../../services/chess/generateBoardClassName';

const Board: FC = () => {
  const { board, whoseTurn } = useChessContext();

  useEffect(() => {}, [board])

  const layout = whoseTurn === "w" ? BOARD_CONFIG : BOARD_REVERSED_CONFIG;

  return (
    <div className={generateBoardClassName(whoseTurn)}>
      {layout.map((row, rowIndex) => {
        return row.map((col, colIndex) => {
          const key: Square = col;
          const coords = key;
          const color = getCellColor(rowIndex, colIndex);
          return <Cell coords={coords} color={color} key={key} />;
        });
      })}
    </div>
  );
};

export default Board;
