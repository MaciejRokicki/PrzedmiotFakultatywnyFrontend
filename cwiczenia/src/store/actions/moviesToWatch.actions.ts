import { Movie } from "../../entities/movie";

export enum MoviesToWatchStoreActions {
    SET_NEW_MOVIE_TO_WATCH = 'SET_NEW_MOVIE_TO_WATCH',
    SET_DELETE_MOVIE_TO_WATCH = 'SET_DELETE_MOVIE_TO_WATCH',
}

export interface SetNewMovieToWatchAction {
    type: MoviesToWatchStoreActions.SET_NEW_MOVIE_TO_WATCH,
    payload: {
        movieToWatch: Movie
    }
}

export interface SetDeleteMovieToWatchAction {
    type: MoviesToWatchStoreActions.SET_DELETE_MOVIE_TO_WATCH,
    payload: {
        movieToWatch: Movie
    } 
}

export type Actions = SetNewMovieToWatchAction | SetDeleteMovieToWatchAction;

export const moviesToWatchActions = {
    setNewMovieToWatch: (movieToWatch: Movie): SetNewMovieToWatchAction => ({
        type: MoviesToWatchStoreActions.SET_NEW_MOVIE_TO_WATCH,
        payload: {
            movieToWatch
        }
    }),
    setDeleteMovieToWatch: (movieToWatch: Movie): SetDeleteMovieToWatchAction => ({
        type: MoviesToWatchStoreActions.SET_DELETE_MOVIE_TO_WATCH,
        payload: {
            movieToWatch
        }
    }),
}