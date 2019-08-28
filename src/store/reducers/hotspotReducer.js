import { NEW, DELETE } from '../types';

const initialState = [
    { title: 'Hotspot #1', message: 'Message Hotspot 1', coordx: 130, coordy: 155 },
    { title: 'Hotspot #2', message: 'Message Hotspot 2', coordx: 180, coordy: 30 },
    { title: 'Hotspot #3', message: 'Message Hotspot 3', coordx: 580, coordy: 350 }
];

export default (state = initialState, action) => {
    switch (action.type) {
        case NEW:
            return [...state, action.hotspot];
        case DELETE:
            return [...state.filter(hotspot => hotspot.title !== action.hotspot.title)];
        default:
            return state;
    }
};
