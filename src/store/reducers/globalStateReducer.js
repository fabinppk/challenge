import { TOGGLE_CLICKED, SET_COORD, CAN_GET_COORDS } from '../types';

const initialState = {
    clicked: false,
    canGetCoords: false,
    coordx: 0,
    coordy: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CLICKED:
            return { ...state, clicked: !state.clicked };
        case SET_COORD:
            return { ...state, coordx: action.payload.coordx, coordy: action.payload.coordy };
        case CAN_GET_COORDS:
            return { ...state, canGetCoords: !state.canGetCoords };
        default:
            return state;
    }
};
