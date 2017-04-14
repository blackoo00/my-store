import shop from '../api/shop';
import * as types from '../constants/ActionTypes';

const indexInitDip = (data) => ({
	type:types.INDEX_INIT,
	data:data
})

export const indexInit = () => dispatch => {
	shop.indexInit(data => {
		dispatch(indexInitDip(data));
	})
}