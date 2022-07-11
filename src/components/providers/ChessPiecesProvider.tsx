import React, { useState, useContext } from 'react';
import { initialGame } from '../../config/initialGameConfig';

interface ChessPiecesContextInterface {
  chessPieces: Object;
  setChessPieces: Function;

  whoseTurn: string;
  setWhoseTurn: Function;
}

const ChessPiecesContext = React.createContext<ChessPiecesContextInterface>({
  chessPieces: {},
  setChessPieces: () => {},

  whoseTurn: '',
  setWhoseTurn: () => '',
});

const ChessPiecesProvider = ({ children }: any) => {
  const [whoseTurn, setWhoseTurn] = useState('white');
  const [chessPieces, setChessPieces] = useState(initialGame);

  return (
    <ChessPiecesContext.Provider
      value={{
        chessPieces,
        setChessPieces,

        whoseTurn,
        setWhoseTurn,
      }}
    >
      {children}
    </ChessPiecesContext.Provider>
  );
};

const useChessPiecesContext = () => {
  return useContext(ChessPiecesContext);
};

export { useChessPiecesContext, ChessPiecesProvider };
