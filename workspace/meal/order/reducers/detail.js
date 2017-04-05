import * as types from '../../contants/ActionTypes';
const initialState = {
	data:[],
	status:0,
	table_id:0,
}

const detail = (state = initialState, action) => {
	switch(action.type){
		case types.GET_ORDER_DETAILS:
			return {
				...state,
				data:action.data,
				status:action.data.status,
				table_id:action.data.tid ? action.data.tid : 0
			}
		case types.CANCEL_ORDER:
			return{
				...state,
				status:2
			}
		case types.SCAN_FINISHED:
			return{
				...state,
				status:1
			}
		default:
			return state;
	}
}

export default detail