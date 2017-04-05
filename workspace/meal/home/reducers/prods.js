import * as types from '../../contants/ActionTypes';
const initialState = {
	list:[],
	searchs:[],
	chooses:[]
}

const prods = (state = initialState, action) =>{
	switch(action.type){
		case types.CHOOSE_CAT:
			return {
				...state,
				searchs:[]
			}
		//获取剩余商品
		case types.GET_SURPLUS_PRODS:
			let test = action.prods;
			for (let key of Object.keys(action.prods)) {
				if(!state.list[key]){
					if(action.prods[key]){
						state.list[key] = action.prods[key];
					}else{
						state.list[key] = [];					
					}
				}
			}
			return {
				...state,
				list:[...state.list]
			}
		//复制订单信息
		case types.GET_COPY_ORDER_DETAIL:
			$.each(action.data.chooses,function(index, el) {
				state.chooses[index] = el.num;
			});
			return{
				...state,
				chooses:[...state.chooses]
			}
		case types.GET_PROD_INFO:
			let cid = action.cid;
			let list = state.list;
			if(!list[cid]){
				if(action.prods){
					list[cid] = action.prods;
				}else{
					list[cid] = [];					
				}
			}
			return{
				...state,
				list:list,
				searchs:[]
			}
		case types.ADD_TO_CART:
			let pid = action.pid;
			let chooses = state.chooses;
			chooses[pid] ? chooses[pid]++ : chooses[pid] = 1;
			return{
				...state,
				chooses:[...chooses]
			}
		case types.DEL_TO_CART:
			state.chooses[action.pid] > 0 ? state.chooses[action.pid]-- : state.chooses[action.pid] = 0;
			return{
				...state,
				chooses:[...state.chooses]
			}
		case types.SEARCH_PRODS:
			let key = action.key;
			let searchs = [];
			if(key.length != 0){
				state.list.map(item => {
					if(item){
						for (let index of Object.keys(item)) {
							if(item[index]['name'].includes(key)){
								searchs = [
									...searchs,
									item[index]
								]
							}
						}
					}
				})
			}else{
				searchs = [];
			}
			return {
				...state,
				searchs:searchs
			}
		case types.CLEAR_ALL:
			return{
				...state,
				chooses:[]
			}
		default:
			return state;
	}
}

export  default prods