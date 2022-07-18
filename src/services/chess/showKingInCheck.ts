const showKingInCheck = (turn: any, board: any) => {
  let squareToHighlight: any = null;

  board.forEach((arr: any) => {
    arr.forEach((square: any) => {
      if (square && square.type === 'k' && square.color === turn) {
        squareToHighlight = square;
      }
    });
  });

  return squareToHighlight;
};

export { showKingInCheck };
