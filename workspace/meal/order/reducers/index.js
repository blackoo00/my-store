import {combineReducers} from 'redux';
import qrcode from './qrcode';
import detail from './detail';

export default combineReducers({
	qrcode,
	detail
})