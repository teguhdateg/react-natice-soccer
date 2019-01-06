import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import logger from 'redux-logger';

let reduxCompose = compose;

if (__DEV__) {
  reduxCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => createStore(reducers, reduxCompose(applyMiddleware(thunk, logger)));

export default configureStore;