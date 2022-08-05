
import './App.css';
import Button from './components/Button';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  function handleIncreaseClick() {
    setCount(count + 1);
  }

  function handleDecreaseClick() {
    setCount(count - 1);
  }
  return (
    <div className="App">
      <h1>Simple React Counter</h1>
      <h3>Count: {count}</h3>
      <div className='buttons'>
        <Button action="Decrease" onClick={handleIncreaseClick}></Button>
        <Button action="Increase" onClick={handleDecreaseClick}></Button>
      </div>
    </div>
  );
}

export default App;
