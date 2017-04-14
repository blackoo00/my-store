import * as types from '../constants/ActionTypes';

const initialState = {
	defaultAdd:[],
	list:[]
}

const address = (state=initialState, action) => {
	switch(action.type){
		//获取默认地址
		case types.GET_DEFAULT_ADDRESS:
			return {
				...state,
				defaultAdd:action.address
			}
		//获取地址列表
		case types.GET_MY_ADDRESSES:
			return {
				...state,
				list:action.addresses
			}
		//设置默认地址
		case types.SET_DEFAULT_ADDRESS:
			let default_add = {};
			state.list.map((item,index) => {
				if(item.id == action.aid){
					state.list[index].choose = 1;
					default_add=state.list[index];
				}else{
					state.list[index].choose = 0;
				}
			})
			return {
				...state,
				list:[...state.list],
				defaultAdd:default_add
			}
		//添加地址
		case types.ADD_ADDRESS:
			return {
				...state,
				list:[
					...state.list,
					...[action.address]
				]
			}
		default:
			return state;
	}
}

export default address