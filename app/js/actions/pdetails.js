import shop from '../api/shop';
import * as types from '../constants/ActionTypes';
import {hashHistory} from 'react-router';
import {getAllProducts} from './carts';

//获取商品详情
const proDetailsInitDip = (pdetails) =>({
	type:types.PRODETAILS_INIT,
	pdetails:pdetails
})

export const proDetailInit = (pid) => dispatch =>{
	shop.getProDetails(pdetails => {
		dispatch(proDetailsInitDip(pdetails))
	},pid);
}

//收藏商品
const handleCollectionDip = () => ({
	type:types.PRODUCT_COLLECTION,
})

export const handleCollection = (pid) => dispatch =>{
	shop.collectionProduct(pid,()=>{
		dispatch(handleCollectionDip())
	});
}
//显示规格
export const handleShowPra = (arg) => ({
	type:types.SHOW_PRO_SPEC,
	arg:arg
})
//隐藏规格
export const handleHidePra = () => ({
	type:types.HIDE_PRO_SPEC,
})
//选择规格
export const chooseAttr = (sid,aid) => ({
	type:types.CHOOSE_ATTR,
	sid:sid,
	aid:aid,
})
//增加数量
export const addNumber = () => ({
	type:types.ADD_CART_PRODUCT_NUMBER,
})
//减少数量
export const delNumber = () => ({
	type:types.DEL_CART_PRODUCT_NUMBER,
})
//加入购物车
export const addCart = (arg,pid,did,num,dprice) => dispatch =>{
	if(Object.keys(dprice).length > 0){
		if(isNaN(pid) || did == 0 || num <= 0){
			$.alert('请选择属性');
			return;
		}
	}else if(num <= 0){
		$.alert('请选择数量');
		return;
	}
	shop.addCart(pid,did,num,()=>{
		if(arg){
			dispatch(handleHidePra());
			getAllProducts(true);//刷新下购物车
			hashHistory.push({pathname:"/Cart"});
		}else{
			$.alert('加入成功');
			dispatch(handleHidePra());
		}
	})
}