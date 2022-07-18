import Main from './components/Main/Main';
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
