import React from 'react';
import './App.css';
import CustomButton from './components/CustomButton';

function App() {

  const [counter, setCounter] = React.useState(0);

  const increaseCounter = (num: number) => {
    setCounter(counter + num);
  }

  const decreaseCounter = (num: number) => {
    setCounter(counter - num);
  }

  const initValueForCounter = (num: number) => {
    setCounter(num);
  }

  return (
    <div className="App">
      {
        counter > 15 && (<div>Liczba przekroczona.</div>)
      }
      {
        counter > 10 && counter <= 15 && (<div>Liczba jest większa od 10.</div>)
      }
      {
        counter < -10 && (<div>Liczba jest mniejsza od -10.</div>)
      }

      <CustomButton onClickAction={() => initValueForCounter(10)}>Ustaw 10</CustomButton>
      <CustomButton onClickAction={() => decreaseCounter(1)}>-</CustomButton>
      { counter }
      <CustomButton onClickAction={() => increaseCounter(1)}>+</CustomButton>
    </div>
  );
}

export default App;
