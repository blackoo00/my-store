import * as types from '../constants/ActionTypes';

const initialState = {
	defaultAdd:[],
}

const address = (state=initialState, action) => {
	switch(action.type){
		case types.GET_DEFAULT_ADDRESS:
			return {
				...state,
				defaultAdd:action.address
			}
		default:
			return state
	}
}

export default address