import {combineReducers} from 'redux';
import carts from './carts';
import pdetails from './pdetails';
import address from './address';
import search from './search';
import scroll from './scroll';
import home from './home';
export default combineReducers({
	carts,
	pdetails,
	address,
	search,
	scroll,
	home
})
