import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './rootReducer';

export default createStore(reducers, applyMiddleware(thunk, logger));
