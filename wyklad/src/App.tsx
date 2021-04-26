import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

// import CustomHeader from './components/CustomHeader';
// import Counter from './components/Counter';
import Home from './views/home/Home';
import Movie from './views/movie/Movie';
import Page404 from './views/page404/Page404';

import './App.css';


const App = () => {

  // const [changedNumber, setChangeNumber] = React.useState(0);

  // const handleOnNumberchange = (num: number)  => {
  //   console.log(num);
  // } 

  // const lessNumberThanZero = (num: number) => {
  //   if(num < 0) {
  //     return (<div>Liczba jest mniejsza od zera.</div>)
  //   }
  // }

  return (
    <div className="App">
      {/* <CustomHeader>
        <Counter onNumberChange={handleOnNumberchange}/>
        {
            changedNumber > 0 && (<div>Liczba jest wieksza od zera.</div>)
        }
        {
          lessNumberThanZero(changedNumber)
        }
      </CustomHeader> */}
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/movie/:id" component={Movie} />
          <Route path="*" component={Page404}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;