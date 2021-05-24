import { StoreState } from '../store';
import { createSelector } from 'reselect';

const todoSelector = {
    getAll: createSelector(
        (state: StoreState) => state.todos,
        todos => todos.list
    )
}

export default todoSelector;