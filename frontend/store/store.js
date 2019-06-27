import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/root_reducer'

const middleWares = [thunk];
if (process.env.NODE_ENV !== 'production') {
    const { logger } = require('redux-logger')
    middleWares.push(logger);
}

const configureStore = (preloadedState={}) => {
    return createStore(rootReducer, preloadedState, applyMiddleware(...middleWares));
}

export default configureStore;