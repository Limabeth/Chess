import React, { useState, useContext } from 'react';
import { chess } from '../../libs/chess/chess';

// interface ChessContextInterface {
//   board: any;
//   setBoard: Function;

//   whoseTurn: "b" | "w";
//   setWhoseTurn: () => "b" | "w";

//   selectedPiece: string;
//   setSelectedPiece: Function;

//   legalMoves: Array<string>;
//   setLegalMoves: Function;
// }

// const ChessContext = React.createContext<ChessContextInterface>({
//   board: [],
//   setBoard: () => {},

//   whoseTurn:  "w",
//   setWhoseTurn: () => "w",

//   selectedPiece: Object,
//   setSelectedPiece: () => {},

//   legalMoves: [],
//   setLegalMoves: () => [],

// });

const ChessContext = React.createContext();

const ChessProvider = ({ children }) => {
  const [whoseTurn, setWhoseTurn] = useState('w');
  const [board, setBoard] = useState(chess.board());
  const [selectedPiece, setSelectedPiece] = useState('');
  const [legalMoves, setLegalMoves] = useState([]);
  const [inCheck, setInCheck] = useState(null);

  return (
    <ChessContext.Provider
      value={{
        board,
        setBoard,

        whoseTurn,
        setWhoseTurn,

        selectedPiece,
        setSelectedPiece,

        legalMoves,
        setLegalMoves,

        inCheck,
        setInCheck,
      }}
    >
      {children}
    </ChessContext.Provider>
  );
};

const useChessContext = () => {
  return useContext(ChessContext);
};

export { useChessContext, ChessProvider };
