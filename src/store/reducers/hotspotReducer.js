import { NEW, DELETE } from '../types';
import { loadState } from '../localStorage';

const initialState = loadState();

export default (state = initialState.hotspots, action) => {
    switch (action.type) {
        case NEW:
            return [...state, action.hotspot];
        case DELETE:
            return [...state.filter(hotspot => hotspot.title !== action.hotspot.title)];
        default:
            return state;
    }
};
