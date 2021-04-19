import React from 'react';
import './App.css';
import CustomHeader from './components/CustomHeader';
import Counter from './components/Counter';

const App = () => {

  const [changedNumber, setChangeNumber] = React.useState(0);

  const handleOnNumberchange = (num: number)  => {
    console.log(num);
  } 

  const lessNumberThanZero = (num: number) => {
    if(num < 0) {
      return (<div>Liczba jest mniejsza od zera.</div>)
    }
  }

  return (
    <div className="App">
      <CustomHeader>
        <Counter onNumberChange={handleOnNumberchange}/>
        {
            changedNumber > 0 && (<div>Liczba jest wieksza od zera.</div>)
        }
        {
          lessNumberThanZero(changedNumber)
        }
      </CustomHeader>
    </div>
  );
}

export default App;