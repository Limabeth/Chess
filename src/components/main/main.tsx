import { FC } from 'react';
import Chessboard from '../chessboard/chessboard';

const Main: FC = () => {
  return (
    <div className='chess-app'>
      <div className='wrapper'>
        <main className='page'>
          <Chessboard />
        </main>
      </div>
    </div>
  );
};

export default Main;
