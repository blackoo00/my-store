import React from 'react';
import TopBtn from '../components/topbtn/';
import {connect} from 'react-redux';
import * as actions from '../actions/';

const TopBtnController = ({...rest}) => (
	<TopBtn
		cancelOrder = {() => {rest.cancelOrder(rest.id)}}
		copyOrder = {() => {rest.copyOrder(rest.id)}}
		status = {rest.status}
	/>
) 

const mapStateToProps = state => ({
	status:state.detail.status,
	id:state.detail.data.id
})

const mapDispatchToProps = dispatch => ({
	cancelOrder:(oid) => {
		$.confirm("您确定要取消订单吗?取消之后不能回复", "确认删除?", function() {
		  dispatch(actions.cancelOrder(oid))
		}, function() {
		  //取消操作
		});
	},
	copyOrder:(oid) => {
		$.confirm("确认复制订单并生成新的订单", "复制订单?", function() {
		  dispatch(actions.copyOrder(oid))
		}, function() {
		  //取消操作
		});
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TopBtnController)