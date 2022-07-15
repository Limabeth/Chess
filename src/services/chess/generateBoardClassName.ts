const generateBoardClassName = (turn: string) => {
  let className: string = 'chessboard__board';

  if (turn === 'b') {
    className += ' chessboard__board--rotated';
  }

  return className;
};

export { generateBoardClassName };
