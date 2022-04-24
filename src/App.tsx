import React from 'react';
import Chessboard from './components/chessboard/chessboard';

function App() {
  return (
    <div className='chess-app'>
      <div className='wrapper'>
        <main className='page'>
          <Chessboard />
        </main>
      </div>
    </div>
  );
}

export default App;
