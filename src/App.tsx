import Main from './components/main/main';
import { ChessProvider } from './components/providers/ChessProvider';

function App() {
  return (
    <ChessProvider>
      {' '}
      <Main />
    </ChessProvider>
  );
}

export default App;
