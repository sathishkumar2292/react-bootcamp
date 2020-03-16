import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {mathReducer, userReducer, productReducer, favoriteReducer, cartReducer} from './reducers/reducers';

const store = createStore(combineReducers({mathReducer, userReducer, productReducer, favoriteReducer, cartReducer}), {}, applyMiddleware(logger,thunk));

export default store