import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Theme, makeStyles, createStyles  } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import FavoriteIcon from '@material-ui/icons/Favorite';

import store from './store';

import SideMenu from './components/SideMenu';

import Home from './views/home/Home';
import ToWatch from './views/toWatch/ToWatch';
import Favorite from './views/favorite/Favorite'; 
import PageNotFound from './views/pageNotFound/PageNotFound';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      margin: '74px 10px 10px 250px',
      [theme.breakpoints.down('xs')]: {
        margin: '56px 10px 10px 10px'
      }
    },
  }),
);

const App = () => {
  const classes = useStyles();

  const sidebarItems = [
    {
      name: "Szukaj",
      icon: <SearchIcon/>,
      path: "/"
    },
    {
      name: "Do obejrzenia",
      icon: <MovieCreationIcon/>,
      path: "/toWatch"
    },
    {
      name: "Ulubione",
      icon: <FavoriteIcon/>,
      path: "/favorite"
    }
  ]

  return (
    <div>
      <BrowserRouter>
        <SideMenu items={sidebarItems} />
        <div className={classes.content}>
          <Provider store={ store }>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/toWatch" component={ToWatch} />
              <Route path="/favorite" component={Favorite} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </Provider>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;