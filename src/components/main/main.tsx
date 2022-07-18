import { FC } from 'react';
import Chess from '../chess/Chess/Chess';

const Main: FC = () => {
  return (
    <div className='chess-app'>
      <div className='wrapper'>
        <main className='page'>
          <Chess />
        </main>
      </div>
    </div>
  );
};

export default Main;
