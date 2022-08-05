
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
      
      <h3>Count: {count}</h3>
      <div className='buttons'>
        <Button action="Decrease" onClick={handleDecreaseClick}></Button>
        <Button action="Increase" onClick={handleIncreaseClick}></Button>
      </div>
    </div>
  );
}

export default App;
