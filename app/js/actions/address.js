import * as types from '../constants/ActionTypes';
import shop from '../api/shop';

const getDefaultAddressDip = (address) =>({
	type:types.GET_DEFAULT_ADDRESS,
	address:address
})

export const getDefaultAddress = () => dispatch =>{
	shop.getDefaultAddress(address =>{
		dispatch(getDefaultAddressDip(address))
	})
}