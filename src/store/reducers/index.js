import { combineReducers } from 'redux';
import hotspots from './hotspotReducer';
import globalState from './globalStateReducer';

const rootReducer = combineReducers({
    hotspots,
    globalState
});

export default rootReducer;
