import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import HistoryIcon from '@material-ui/icons/History';
import AddIcon from '@material-ui/icons/Add';

import SideMenu from './components/SideMenu';

import Home from './views/home/Home';
import History from './views/history/History';
import NewBill from './views/newBill/NewBill';
import PageNotFound from './views/pageNotFound/PageNotFound';

const useStyles = makeStyles({
  content: {
    margin: '74px 10px 10px 250px'
  },
});

const App = () => {
  const classes = useStyles();

  const sidebarItems = [
    {
      name: "Strona główna",
      icon: <HomeIcon/>,
      path: "/"
    },
    {
      name: "Dodaj rachunek",
      icon: <AddIcon/>,
      path: "/newBill"
    },
    {
      name: "Historia",
      icon: <HistoryIcon/>,
      path: "/history"
    }
  ]

  return (
    <div>
      <BrowserRouter>
        <SideMenu items={sidebarItems} />
        <div className={classes.content}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/newBill" component={NewBill} />
            <Route path="/history" component={History} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;