const generatePieceClassName = (
  whoseTurn: string,
  pieceColor: string,
  selected: boolean
) => {
  let className: string = 'chess-piece';

  if (whoseTurn === pieceColor) {
    className += ' chess-piece--hoverable';
  }

  if (selected) {
    className += ' chess-piece--selected';
  }

  return className;
};

export { generatePieceClassName };
