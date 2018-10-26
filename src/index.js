import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import rooterReducer from './reducers'
import { createStore,compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { fetchCategories } from "./actions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore( rooterReducer, composeEnhancers(
    applyMiddleware(thunk)
));

store.dispatch(fetchCategories())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> 
, document.getElementById('root'));