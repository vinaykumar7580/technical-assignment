import logo from './logo.svg';
import './App.css';
import Counter1 from './Components/Counter1';
import Counter2 from './Components/Counter2';
import Todo from './Components/Todo';

function App() {
  return (
    <div className="App">
      <Counter1/>
      <hr/>
      <Counter2/>
      <hr/>
      <Todo/>
    </div>
  );
}

export default App;
