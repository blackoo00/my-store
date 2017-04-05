import * as types from '../../contants/ActionTypes';
const initialState = {
	config:[],
	qrcode:'',
	show:false
}

const qrcode = (state = initialState, action) => {
	switch(action.type){
		case types.GET_SCAN_CONFIG:
			return {
				...state,
				config:action.data
			}
		case types.GET_ORDER_DETAILS:
			return {
				...state,
				qrcode:action.data.qrcode
			}
		case types.TOGGLE_QRCODE:
			return{
				...state,
				show:!state.show
			}
		default:
			return state;
	}
}

export default qrcode