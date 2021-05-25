import { Reducer } from "redux";
import { Movie } from "../../entities/movie";
import { Actions, MoviesToWatchStoreActions } from "../actions/moviesToWatch.actions";

export interface MoviesToWatchList {
    list: Movie[];
}

export const MoviesToWatchListInitialState: MoviesToWatchList = {
    list: []
};

export const moviesToWatchStoreReducer: Reducer<MoviesToWatchList, Actions> =
    (state: MoviesToWatchList = MoviesToWatchListInitialState, actions: Actions) => {
        switch (actions.type) {
            case MoviesToWatchStoreActions.SET_NEW_MOVIE_TO_WATCH:
                if(state.list.some(movie => movie.imdbID === actions.payload.movieToWatch.imdbID))
                    return {...state, list: state.list}

                return {
                    ...state,
                    list: [
                        ...state.list,
                        actions.payload.movieToWatch
                    ]
                };

            case MoviesToWatchStoreActions.SET_DELETE_MOVIE_TO_WATCH:
                return {
                    ...state,
                    list: state.list.filter(movie => movie.imdbID !== actions.payload.movieToWatch.imdbID)
                };

            default:
                return state;
        }
    }