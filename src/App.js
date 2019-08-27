import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Main from './pages/Main';
import Header from './pages/Header';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <Header />
            <Main />
        </Provider>
    );
}

export default App;
