const generatePieceClassName = (
  whoseTurn: string,
  pieceColor: string,
  selected: boolean
) => {
  let className: string = 'chessboard__piece';

  if (whoseTurn === pieceColor) {
    className += ' chessboard__piece--hoverable';
  }

  if (selected) {
    className += ' chessboard__piece--selected';
  }

  return className;
};

export { generatePieceClassName };
