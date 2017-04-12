import {combineReducers} from 'redux';
import home from './home/reducers/';
import settle from './settle/reducers/';
import order from './order.js';
import myorders from './myorders/reducers/';
import my from './my/reducers/';

export default combineReducers({
    home,
    settle,
    order,
    myorders,
    my
})
