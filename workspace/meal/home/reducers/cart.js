import * as types from '../../contants/ActionTypes';

const initialState = {
	show:false,
	list:[],
	showlist:false,
	settle:false,
	remark:''
}

const cart = (state = initialState, action) => {
	switch(action.type){
		case types.CART_REMARK:
			return {
				...state,
				remark:action.remark
			}
		case types.TOGGLE_CART:
			return{
				...state,
				show:!state.show,
				showlist:state.show ? false : true,
				settle:state.show ? false : true,
			}
		case types.SHOW_CART_LIST:
			return{
				...state,
				show:state.showlist ? false : true,
				showlist:!state.showlist,
				settle:false,
			}
		case types.CART_SETTLE:
			return{
				...state,
				show:state.settle ? false : true,
				showlist:false,
				settle:!state.settle,
			}
		case types.ADD_TO_CART:
			let pid = action.pid;
			let list = state.list;
			list[pid] ? list[pid]['num']++ : list[pid] = {'num':1,'pinfo':action.pinfo};
			return{
				...state,
				list:[...list]
			}
		case types.DEL_TO_CART:
			state.list[action.pid]['num'] > 1 ? state.list[action.pid]['num']-- : state.list[action.pid] = null;
			return{
				...state,
				list:[...state.list]
			}
		case types.CLEAR_ALL:
			return{
				...state,
				list:[],
				showlist:false,
				settle:false,
			}
		case types.GET_COPY_ORDER_DETAIL:
			$.each(action.data.chooses,function(index, el) {
				state.list[el.pinfo.id] = el;
			});
			return {
				...state,
				list:[...state.list]
			}
		default:
			return state;
	}
}

export default cart
