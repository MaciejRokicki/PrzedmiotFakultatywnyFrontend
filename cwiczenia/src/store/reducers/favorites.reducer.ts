import { Reducer } from "redux";
import { Movie } from "../../entities/movie";
import { Actions, FavoriteStoreActions } from "../actions/favorites.actions";

export interface FavoriteMoviesList {
    list: Movie[];
}

export const favoriteMoviesListInitialState: FavoriteMoviesList = {
    list: []
};

export const favoritesStoreReducer: Reducer<FavoriteMoviesList, Actions> =
    (state: FavoriteMoviesList = favoriteMoviesListInitialState, actions: Actions) => {
        switch (actions.type) {
            case FavoriteStoreActions.SET_NEW_FAVORITE:
                if(state.list.some(movie => movie.imdbID === actions.payload.favorite.imdbID))
                    return {...state, list: state.list}
                    
                return {
                    ...state,
                    list: [
                        ...state.list,
                        actions.payload.favorite
                    ]
                };

            case FavoriteStoreActions.SET_DELETE_FAVORITE:
                return {
                    ...state,
                    list: state.list.filter(movie => movie.imdbID !== actions.payload.favorite.imdbID)
                };

            default:
                return state;
        }
    }