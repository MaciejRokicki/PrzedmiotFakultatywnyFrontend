import { Movie } from "../entities/movie";
import { favoritesActions } from "../store/actions/favorites.actions"
import store from "../store"

export class FavoriteService {
    setNewFavorite(movie: Movie) {
        store.dispatch(favoritesActions.setNewFavorite(movie));
    }

    setDeleteFavorite(movie: Movie) {
        store.dispatch(favoritesActions.setDeleteFavorite(movie));
    }
}