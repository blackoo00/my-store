import * as types from '../../contants/ActionTypes';
const initialState = {
	searchkey:'',
}

const search = (state = initialState, action) => {
	switch(action.type){
		case types.SEARCH_PRODS:
			return {
				...state,
				searchkey:action.key
			}
		case types.CHOOSE_CAT:
			return {
				...state,
				searchkey:''
			}
		default:
			return state;
	}
}

export default search