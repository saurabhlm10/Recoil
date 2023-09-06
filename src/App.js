import './App.css';
import Todos from './components/Todos';
import { useRecoilValue } from 'recoil'
import { totalTodos } from './state/selectors/TotalTodos';

function App() {
  const totalTodoState = useRecoilValue(totalTodos)

  return (
    <main>
      <Todos />
      {totalTodoState}
    </main>
  );
}

export default App;
