import { StoreState } from '../store';
import { createSelector } from 'reselect';

const moviesToWatchSelector = {
    getAll: createSelector(
        (state: StoreState) => state.moviesToWatch,
        moviestToWatch => moviestToWatch.list
    )
}

export default moviesToWatchSelector;