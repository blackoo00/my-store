import * as types from '../constants/ActionTypes';

const initialState = {
	ban:[],
	cat:[],
	pro:[],
}

const index = (state = initialState,action) => {
	switch(action.type){
		case types.INDEX_INIT:
			return {
				...state,
				...action.data
			}
		default:
			return state
	}
}

export default index