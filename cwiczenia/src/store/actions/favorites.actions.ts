import { Movie } from "../../entities/movie";

export enum FavoriteStoreActions {
    SET_NEW_FAVORITE = 'SET_NEW_FAVORITE',
    SET_DELETE_FAVORITE = 'SET_DELETE_FAVORITE',
}

export interface SetNewFavoriteAction {
    type: FavoriteStoreActions.SET_NEW_FAVORITE,
    payload: {
        favorite: Movie
    }
}

export interface SetDeleteFavoriteAction {
    type: FavoriteStoreActions.SET_DELETE_FAVORITE,
    payload: {
        favorite: Movie
    } 
}

export type Actions = SetNewFavoriteAction | SetDeleteFavoriteAction;

export const favoritesActions = {
    setNewFavorite: (favorite: Movie): SetNewFavoriteAction => ({
        type: FavoriteStoreActions.SET_NEW_FAVORITE,
        payload: {
            favorite
        }
    }),
    setDeleteFavorite: (favorite: Movie): SetDeleteFavoriteAction => ({
        type: FavoriteStoreActions.SET_DELETE_FAVORITE,
        payload: {
            favorite
        }
    }),
}