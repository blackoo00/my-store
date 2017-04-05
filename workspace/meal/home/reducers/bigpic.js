import * as types from '../../contants/ActionTypes';
const initialState = {
	info:[],
	show:false
}

const bigpic = (state = initialState, action) => {
	switch(action.type){
		case types.SHOW_PRO_PIC:
			return {
				...state,
				info:action.info,
				show:true
			}
		case types.CLOSE_PRO_PIC:
			return {
				...state,
				info:[],
				show:false
			}
		default:
			return state;
	}
}

export default bigpic