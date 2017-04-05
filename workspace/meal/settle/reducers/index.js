import * as types from '../../contants/ActionTypes';
const initialState = {
	plist:[],
	totalFee:0,
	total:0,
	company:'',
	id:0,
	tid:0,
}

const settle = (state = initialState, action) =>{
	switch(action.type){
		case types.SETTLE_INIT:
			return {
				...state,
				plist:action.data.prods,
				totalFee:action.data.totalFee,
				total:action.data.total,
				company:action.data.company,
				id:action.data.id,
				tid:action.data.tid,
			}
		default:
			return state;
	}
}

export default settle