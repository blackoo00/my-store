import * as types from '../constants/ActionTypes';

const initialState = {
	list:[],
	searchText:'',
	scrollTop:0,
	count:0,
	bindscroll:0,
}

const search = (state = initialState,action) => {
	switch(action.type){
		case types.GET_PRODUCTS:
			return {
				...state,
				list:action.products,
				count:action.products.length
			}
		case types.CANCEL_SEARCH:
			return {
				...state,
				searchText:''
			}
		case types.SEARCH_PRO:
			return {
				...state,
				searchText:action.keys
			}
		//滚动加载
		case types.SEARCH_SCROLL_GET_MORE_PRO:
			return {
				...state,
				list:[
					...state.list,
					...action.products
				],
				count:state.count + action.products.length,
				bindscroll:1,
			}
		default:
			return state;
	}
}

export default search;