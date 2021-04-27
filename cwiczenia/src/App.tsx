import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import SideMenu from './components/SideMenu';

import Home from './views/home/Home';
import History from './views/history/History';
import NewBill from './views/newBill/NewBill';
import PageNotFound from './views/pageNotFound/PageNotFound';

import './App.css';

const useStyles = makeStyles({
  test: {
      width: '1000px'
  },
});

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
      <SideMenu/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/newBill" component={NewBill} exact/>
          <Route path="/history" component={History} />
          <Route path="*" component={PageNotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;