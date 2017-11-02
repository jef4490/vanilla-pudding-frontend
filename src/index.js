import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import {
ConnectedRouter as Router,
routerMiddleware
} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import { Route, Link} from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import './index.css';
import rootReducer from './reducers';

const history = createHistory()
const rMiddleware = routerMiddleware(history)

let initialState={
  clients: {
    clients: ["bob"],
    editClient: {
      client: {
        clientId: 0,
        emailAddress: "",
        name: "",
        notes: "",
        phoneNumber: ""
      },
    showDialog: false}},
  orders: {orders: []}
}

let store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk, rMiddleware)))

ReactDOM.render(<Provider store={store}>
                <App />
                </Provider>, document.getElementById('root'));
registerServiceWorker();
