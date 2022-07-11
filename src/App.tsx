import Main from './components/main/main';
import { ChessPiecesProvider } from './components/providers/ChessPiecesProvider';

function App() {
  return (
    <ChessPiecesProvider>
      {' '}
      <Main />
    </ChessPiecesProvider>
  );
}

export default App;
