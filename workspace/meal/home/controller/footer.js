import React from 'react';
import Footer from '../components/footer/tocart';
import {connect} from 'react-redux';
import * as cartActions from '../actions/cart.js';

const FooterController = ({...rest}) => (
	<Footer
		num = {rest.num}
		totalFee = {rest.totalFee}
		showCartList = {() => {rest.showCartList()}}
		cartSettle = {rest.cartSettle}
		settle = {rest.settle}
		onSubmit = {() => {rest.onSubmit(rest.cartlist,rest.remark)}}
	/>
)

const mapStateToProps = state =>({
	num:state.footer.num,
	totalFee:state.footer.totalFee,
	settle:state.cart.settle,
	cartlist:state.cart.list,
	remark:state.cart.remark,
})

const mapDispatchToProps = dispatch => ({
	showCartList:() => {
		dispatch(cartActions.showCartList());
	},
	cartSettle:(num) => {
		if(num > 0){
			dispatch(cartActions.cartSettle());
		}
	},
	onSubmit:(clist,remark) => {
		$.confirm('确定下单吗?','确认下单',function(){
			dispatch(cartActions.cartSubmit(clist,remark));
		})
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(FooterController)