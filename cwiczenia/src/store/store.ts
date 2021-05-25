import { combineReducers } from "redux";

import * as FavoritesActions from './actions/favorites.actions';
import { FavoriteMoviesList, favoriteMoviesListInitialState, favoritesStoreReducer } from "./reducers/favorites.reducer";
import * as MoviesToWatchStoreActions from "./actions/moviesToWatch.actions";
import { MoviesToWatchList, MoviesToWatchListInitialState, moviesToWatchStoreReducer } from "./reducers/moviesToWatch.reducer";

export type StoreActionTypes = FavoritesActions.Actions | MoviesToWatchStoreActions.Actions;

export interface StoreState { 
    favorites: FavoriteMoviesList;
    moviesToWatch: MoviesToWatchList;
};

export const initialStoreState: StoreState = {
    favorites: favoriteMoviesListInitialState,
    moviesToWatch: MoviesToWatchListInitialState
}

export const reducers = combineReducers<StoreState>({
    favorites: favoritesStoreReducer,
    moviesToWatch: moviesToWatchStoreReducer
});