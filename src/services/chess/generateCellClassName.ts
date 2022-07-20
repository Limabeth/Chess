import { CellColorType } from '../../types/chess/CellColorType';
import { SquareCheckType } from '../../types/chess/SquareCheckType';

const generateCellClassName = (
  color: CellColorType,
  check: SquareCheckType
) => {
  let className: string = 'chess-square';

  if (color === 'light') {
    className += ' chess-square--white';
  }

  if (color === 'dark') {
    className += ' chess-square--black';
  }

  if (check.legal) {
    className += ' chess-square--legal';
  }

  if (check.flags.includes('c')) {
    className += ' chess-square--capture';
  }

  if (check.flags.includes('e')) {
    className += ' chess-square--en-passant';
  }

  if (check.flags.includes('k') || check.flags.includes('q')) {
    className += ' chess-square--castling';
  }

  if (check.inCheck) {
    className += ' chess-square--in-check';
  }

  return className;
};

export { generateCellClassName };
