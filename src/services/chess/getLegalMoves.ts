const getLegalMoves = (movesArray: Object) => {
  const moves = JSON.parse(JSON.stringify(movesArray));

  const legalMoves: Array<string> = [];

  moves.forEach((move: any) => {
    const legalMove = move.to;

    if (legalMove) {
      legalMoves.push(legalMove);
    }
  });

  return legalMoves;
};

export { getLegalMoves };
