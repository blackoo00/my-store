import {combineReducers} from 'redux';
import carts from './carts';
import settle from './settle';
import pdetails from './pdetails';
export default combineReducers({
	carts,
	pdetails,
})
