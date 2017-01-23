import shop from '../api/shop';
import * as types from '../constants/ActionTypes';

const getCartsInfoDispath = carts =>({
	type:types.GET_CART_INFO,
	carts:carts
})

export const getCartsInfo = () => dispatch => {
	shop.getCartsInfo(carts=>{
		dispatch(getCartsInfoDispath(carts))
	})
}