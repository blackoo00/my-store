import {combineReducers} from 'redux';
import home from './home/reducers/';
import settle from './settle/reducers/';
import order from './order.js';

export default combineReducers({
    home,
    settle,
    order
})
