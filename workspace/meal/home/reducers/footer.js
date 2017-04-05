import * as types from '../../contants/ActionTypes';

const initialState = {
	num:0,
	totalFee:0
}

const toDecimal2 = (src,pos) => { 
     return Math.round(src*Math.pow(10, pos))/Math.pow(10, pos); 
   } 

const footer = (state = initialState, action) => {
	switch(action.type){
		//复制订单信息
		case types.GET_COPY_ORDER_DETAIL:
			return{
				...state,
				num:parseInt(action.data.total),
				totalFee:action.data.totalFee
			}
		case types.ADD_TO_CART:
			return {
				...state,
				num:state.num +=1,
				totalFee:(parseFloat(state.totalFee) + parseFloat(action.price)).toFixed(2)
			}
		case types.DEL_TO_CART:
			return {
				...state,
				num:state.num -=1,
				totalFee:(parseFloat(state.totalFee) - parseFloat(action.price)).toFixed(2)
			}
		case types.CLEAR_ALL:
			return{
				...state,
				num:0,
				totalFee:0
			}
		default:
			return state;
	}
}

export default footer;