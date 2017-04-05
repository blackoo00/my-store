import * as types from '../../contants/ActionTypes';
import meal from '../../api/meal';
import log from '../../api/log';

//通过分类ID获取商品列表
const prodsInfoDip = (prods,cid) =>({
	type:types.GET_PROD_INFO,
	prods:prods,
	cid:cid
})

export const prodsInfo = (cid) => dispatch =>{
	meal.getProdInfo(prods => {
		dispatch(prodsInfoDip(prods,cid))
	},cid)
}

//加入购物车
export const addToCartDip = (pinfo) => ({
	type:types.ADD_TO_CART,
	pid:pinfo.id,
	price:pinfo.price,
	cid:pinfo.catid,
	pinfo:pinfo
})

export const addToCart = (pinfo,searchkey) => dispatch => {
	if(searchkey.length != 0 ){
		log.ProdSearch(pinfo.id,searchkey)
	}
	log.ProdAddToCart(pinfo.id,1);
	dispatch(addToCartDip(pinfo));
}
//减少购物车商品数量
export const delCartNumsDip = (pinfo) => ({
	type:types.DEL_TO_CART,
	pid:pinfo.id,
	price:pinfo.price,
	cid:pinfo.catid
})

export const delCartNums = (pinfo) => dispatch => {
	log.ProdAddToCart(pinfo.id,-1);
	dispatch(delCartNumsDip(pinfo));
}
//搜索
const searchProdsDip = (key) => ({
	type:types.SEARCH_PRODS,
	key:key
})

export const searchProds = (key) => dispatch =>{
	if(key){
		dispatch(searchProdsDip(key))
		// meal.searchProds(prods => {
		// 	dispatch(searchProdsDip(prods))
		// },key)
	}else{
		dispatch(searchProdsDip([]))
	}
}

//点击搜索时获取剩余商品(排除以后分类商品)
const getSurplusProdsDip = (prods) => ({
	type:types.GET_SURPLUS_PRODS,
	prods:prods
})

export const getSurplusProds = (cids) => dispatch => {
	meal.getSurplusProds(prods => {
		dispatch(getSurplusProdsDip(prods))
	},cids)
}

//显示大图
const showProdPicDip = (pinfo) => ({
	type:types.SHOW_PRO_PIC,
	info:pinfo
})

export const showProdPic = (pinfo,searchkey) => dispatch => {
	if(searchkey.length != 0 ){
		log.ProdSearch(pinfo.id,searchkey)
	}
	log.ProdClick(pinfo.id)
	dispatch(showProdPicDip(pinfo));
}

export const closeProdPic = () => ({
	type:types.CLOSE_PRO_PIC,
})