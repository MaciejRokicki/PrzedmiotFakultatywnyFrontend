import { StoreState } from '../store';
import { createSelector } from 'reselect';

const favoriteSelector = {
    getAll: createSelector(
        (state: StoreState) => state.favorites,
        favorites => favorites.list
    )
}

export default favoriteSelector;