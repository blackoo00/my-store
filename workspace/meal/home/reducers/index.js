import {combineReducers} from 'redux';
import cats from './cats';
import prods from './prods';
import footer from './footer';
import cart from './cart';
import bigpic from './bigpic';
import search from './search';

export default combineReducers({
	cats,
	prods,
	footer,
	bigpic,
	search,
	cart
})