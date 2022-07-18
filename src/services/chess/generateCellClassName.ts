const generateCellClassName = (color: string, check: any) => {
  let className: string = 'chess-square';

  if (color === 'white') {
    className += ' chess-square--white';
  }

  if (color === 'black') {
    className += ' chess-square--black';
  }

  if (check.legal) {
    className += ' chess-square--legal';
  }

  if (check.flags.includes("c")) {
    className += ' chess-square--capture'
  }

  if (check.flags.includes("e")) {
    className += ' chess-square--en-passant'
  }

  if (check.inCheck) {
    className += " chess-square--in-check";
  }

  return className;
};

export { generateCellClassName };
