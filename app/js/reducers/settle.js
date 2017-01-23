import * as types from '../constants/ActionTypes';

const inititalState = {
	address:[],
	choose_ids:[],
	total_fee:0,
	total_num:0,
};

const settle = (state = inititalState, action) => {
	switch(action.type){
		case types.GET_CART_INFO:
			return {
				...state,
				...action.carts
			}
		case types.ASSIGN_SETTLE_CHOOSEIDS:
			state.choose_ids = action.cartIds;
			return{
				...state
			}
		default:
			return state;
	}
}

export default settle;