import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import thunk from 'redux-thunk'
import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import user from './reducers/userReducer';
import product from './reducers/productReducer';
import {Provider} from 'react-redux'

const all_reducer = combineReducers({user, product});
const store = createStore(all_reducer,
    compose(applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

ReactDOM.render(<Provider store={store}><App count={4}/></Provider>, document.getElementById('root'));
