import * as types from '../../contants/ActionTypes';

const initialState = {
	list:[],
	chooseId:0,
	chooseIds:'',
	cnums:[],
}

const cats = (state = initialState, action) => {
	switch(action.type){
		//复制订单信息
		case types.GET_COPY_ORDER_DETAIL:
			$.each(action.data.cnums,function(index, el) {
				state.cnums[index] = el;
			});
			return {
				...state,
				cnums:[...state.cnums]
			}
		case types.CATS_INIT:
			return {
				...state,
				list:action.cats,
				chooseId:action.cats[0].id,
				chooseIds:action.cats[0].id + ','
			};
		case types.CHOOSE_CAT:
			return {
				...state,
				chooseId:action.cid,
				chooseIds:state.chooseIds.includes(action.cid + ',') ? state.chooseIds : state.chooseIds + action.cid + ','
			}
		case types.ADD_TO_CART:
			state.cnums[action.cid] ? state.cnums[action.cid] +=1 : state.cnums[action.cid] = 1;
			return{
				...state,
				cnums:[...state.cnums]
			}
		case types.DEL_TO_CART:
			state.cnums[action.cid] > 0 ? state.cnums[action.cid] -=1 : state.cnums[action.cid] = 0;
			return{
				...state,
				cnums:[...state.cnums]
			}
		case types.CLEAR_ALL:
			return{
				...state,
				cnums:[]
			}
		default:
			return state;
	}
}

export default cats;