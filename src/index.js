import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Store from './Store/Store';
import {createStore,applyMiddleware} from 'redux';
import usersReducer from './Reducers/usersReducer';
import thunk  from 'redux-thunk';
import App from './App';

const store =createStore (usersReducer,applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <App />
    </Provider>
  </React.StrictMode>
);
