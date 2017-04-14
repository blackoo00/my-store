import * as types from '../../contants/ActionTypes';

const initialState = {
	list:[],
	nomore:false,
}

const myOrders = (state = initialState, action) =>{
	switch(action.type){
		case types.GET_MYORDERS:
			return {
				...state,
				list:action.data ? action.data : [],
			}
		case types.LOAD_MORE_ORDERS:
			return {
				...state,
				list:[
					...state.list,
					...action.data
				],
				nomore:!action.data
			}
		default:
			return state
	}
}

export default myOrders
