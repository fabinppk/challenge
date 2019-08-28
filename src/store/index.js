import { createStore } from 'redux';
import reducer from './reducers';
import { saveState } from './localStorage';

const store = createStore(reducer);

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
