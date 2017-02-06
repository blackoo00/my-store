import * as types from '../constants/ActionTypes';
const inititalState = {
	ban:[],			//商品BANNER
	pro:{},			//商品详情信息
	col:false,		//判断是否收藏商品
	paranimate:'false',	//DIV的类名用于判断显示还是隐藏
	spec:[],		//规格，显示用
	dprice:[],		//服务端读取的规格价格,键值为属性ID（例：['1,4':30.0]）
	chooseId:[],	//选中的属性ID(1：用于选中属性的红框标记，2：用于读取价格，服务端传入的价格是根据属性ID来设置价格的)
	chooseAttr:'',	//选中的属性（例：已选择：尺寸：30 颜色：黄色）
	price:0,		//商品对应的属性价格(没有选中属性的时候默认显示pro的价格)
	number:1,		//选择商品的数量
	buy:false,		//true:立即购买;false:加入购物车
	chooseDid:0,	//商品属性ID
}

const pdetails = (state = inititalState, action) =>{
	switch(action.type){
		//获取商品详情
		case types.PRODETAILS_INIT:
			return {
				...state,
				...action.pdetails,
			}
		//收藏商品
		case types.PRODUCT_COLLECTION:
			return {
				...state,
				col:!state.col
			}
		//显示商品规格选项
		case types.SHOW_PRO_SPEC:
			return {
				...state,
				paranimate:'show',
				buy:action.arg == 'buy' ? true : false,
			}
		//隐藏商品规格选项
		case types.HIDE_PRO_SPEC:
			return {
				...state,
				paranimate:'hide',
			}
		//选择商品规格
		case types.CHOOSE_ATTR:
			let sid = action.sid;//传入的是数组的键值，不是ID
			let aid = action.aid;//传入的是数组的键值，不是ID
			state.chooseId[sid] = aid;
			let spec = state.spec;
			let str = '';
			let attr = '';
			state.chooseId.map(function(elem, index) {
				str += spec[index]['attr'][elem]['id'] + ',';
				attr += spec[index]['value'] + ':' + spec[index]['attr'][elem]['value'] + ' ';
			})
			return{
				...state,
				chooseId:state.chooseId,
				price:$.type(state.dprice[str]) != 'undefined' ? state.dprice[str].price : 0,
				chooseAttr:attr,
				chooseDid:$.type(state.dprice[str]) != 'undefined' ? state.dprice[str].id : 0,
			}
		//增加商品数量
		case types.ADD_CART_PRODUCT_NUMBER:
			return{
				...state,
				number:state.number+1
			}
		//减少商品数量
		case types.DEL_CART_PRODUCT_NUMBER:
			return{
				...state,
				number:state.number > 1 ? state.number-1 : 1,
			}
		default:
			return state;
	}
}

export default pdetails