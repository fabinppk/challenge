import { combineReducers } from 'redux';
import hotspots from './hotspotReducer';

const rootReducer = combineReducers({
    hotspots
});

export default rootReducer;
