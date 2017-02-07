import {combineReducers} from 'redux';
import carts from './carts';
import pdetails from './pdetails';
import address from './address';
export default combineReducers({
	carts,
	pdetails,
	address
})
