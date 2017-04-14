import * as types from '../constants/ActionTypes';

const initialState = []


const search = (state = initialState,action) => {
	switch(action.type){
		case types.SCROLL_POSITION:
			state[action.hash] = {
				scrollY:action.scrollX,
				scrollY:action.scrollY,
			};
			return {
				...state,
			}
		default:
			return state;
	}
}

export default search;