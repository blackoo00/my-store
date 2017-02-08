import * as types from '../constants/ActionTypes';
import shop from '../api/shop';
import {hashHistory} from 'react-router'

//获取默认地址
const getDefaultAddressDip = (address) =>({
	type:types.GET_DEFAULT_ADDRESS,
	address:address
})

export const getDefaultAddress = () => dispatch =>{
	shop.getDefaultAddress(address =>{
		dispatch(getDefaultAddressDip(address))
	})
}
//获取个人地址列表
const getMyAddressesDip = (addresses) =>({
	type:types.GET_MY_ADDRESSES,
	addresses:addresses
})

export const getMyAddresses = () => dispatch =>{
	shop.getMyAddresses(addresses => {
		dispatch(getMyAddressesDip(addresses));
	})
}
//设置默认地址
const setDefaultAddressDip = (aid) => ({
	type:types.SET_DEFAULT_ADDRESS,
	aid:aid
})

export const setDefaultAddress = (aid) => dispatch => {
	shop.setDefaultAddress(aid,()=>{
		dispatch(setDefaultAddressDip(aid))
		hashHistory.push({pathname:'/confirmOrderWap'})
	})
}
//添加地址
const addAddressDip = (address) =>({
	type:types.ADD_ADDRESS,
	address:address
})

export const addAddress = (name,tel,address) => dispatch =>{
	if(!name || !tel || !address){
		$.alert('请完善信息');
		return;
	}
	shop.addAddress(
		address => {
			dispatch(addAddressDip(address))
		},name,tel,address,()=>{
		hashHistory.push({ pathname: '/AddressList'});
	})
}