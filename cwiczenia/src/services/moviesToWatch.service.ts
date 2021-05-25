import { Movie } from "../entities/movie";
import { moviesToWatchActions } from "../store/actions/moviesToWatch.actions"
import store from "../store"

export class MoviesToWatchService {
    setNewMovieToWatch(movie: Movie) {
        store.dispatch(moviesToWatchActions.setNewMovieToWatch(movie));
    }

    setDeleteMovieToWatch(movie: Movie) {
        store.dispatch(moviesToWatchActions.setDeleteMovieToWatch(movie));
    }
}