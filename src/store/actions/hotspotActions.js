import { NEW, DELETE } from '_redux/types';

const newHotspot = hotspot => {
    return dispatch => {
        dispatch({ type: NEW, payload: hotspot });
    };
};

const deleteHotspot = hotspot => {
    return dispatch => {
        dispatch({ type: DELETE, payload: hotspot });
    };
};

export default {
    newHotspot,
    deleteHotspot
};
