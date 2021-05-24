import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import CustomHeader from './components/CustomHeader';
// import Counter from './components/Counter';
import Home from './views/home/Home';
import Movie from './views/movie/Movie';
import Page404 from './views/page404/Page404';

import './App.css';
import store from './store';
import TodoPanel from './views/todoPanel/TodoPanel';


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
      <Provider store={ store }>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/movie/:id" component={Movie} />
            <Route path="/todos" component={TodoPanel} />
            <Route path="*" component={Page404}/>
          </Switch>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;