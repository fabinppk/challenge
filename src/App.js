import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Content from './pages/Content';
import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <Content />
        </Provider>
    );
};

export default App;
