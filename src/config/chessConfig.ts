interface chessConfigInterface {
  chessTableSelector: string;
  chessPieceBoxSelector: string;
  chessPieceSelector: string;
  blackWinsSelector: string;
  whiteWinsSelector: string;
  whitePlaysDown: boolean;
  useInitialGame: boolean;
}

const chessConfig: chessConfigInterface = {
  chessTableSelector: '.chess-table',
  chessPieceBoxSelector: '.piece-box',
  chessPieceSelector: '.piece',
  blackWinsSelector: '.chess-message .black-wins',
  whiteWinsSelector: '.chess-message .white-wins',
  whitePlaysDown: false,
  useInitialGame: false,
};

export { chessConfig };
