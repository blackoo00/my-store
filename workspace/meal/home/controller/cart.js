import React from 'react';
import Cart from '../components/main/cart/';
import {connect} from 'react-redux';
import * as cartActions from '../actions/cart.js';
import * as Prodsactions from '../actions/prods';
import ActionSheet from '../../common/components/actionsheet/'

let remark = '';

const CartController = ({...rest}) => (
	<ActionSheet
		show = {rest.show}
		toggleActionSheet = {() => {rest.toggleCart()}}
	>
		<Cart
			addToCart = {rest.addToCart}
			delCartNums = {rest.delCartNums}
			list = {rest.list}
			remark = {rest.remark}
			refs = {node => {remark = node}}
			cartRemak = {() => {rest.cartRemak(remark.value)}}
			showlist = {rest.showlist}
			settle = {rest.settle}
			clearAll = {() => {rest.clearAll()}}
			totalFee = {rest.totalFee}
		/>
	</ActionSheet>
)

const mapStateToProps = state => ({
	show:state.cart.show,
	showlist:state.cart.showlist,
	settle:state.cart.settle,
	list:state.cart.list,
	remark:state.cart.remark,
	totalFee:state.footer.totalFee,
})

const mapDispatchToProps = dispatch => ({
	cartRemak:(remark) => {
		dispatch(cartActions.cartRemak(remark))
	},
	toggleCart:() => {
		dispatch(cartActions.toggleCart());
	},
	addToCart:(pinfo) => {
		dispatch(Prodsactions.addToCart(pinfo));
	},
	delCartNums:(pinfo) => {
		dispatch(Prodsactions.delCartNums(pinfo));
	},
	clearAll:()=>{
		$.confirm("您确定要清空购物车吗?", "确认删除?", function() {
			dispatch(cartActions.clearCart($.toast("购物车已清空!")));
        	dispatch(cartActions.toggleCart());
        }, function() {

        });
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CartController)
