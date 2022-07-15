const generateCellClassName = (color: string, isLegal: boolean) => {
  let className: string = 'chessboard__cell';

  if (color === 'white') {
    className += ' chessboard__cell--white';
  }

  if (color === 'black') {
    className += ' chessboard__cell--black';
  }

  if (isLegal) {
    className += ' chessboard__cell--legal';
  }

  return className;
};

export { generateCellClassName };
