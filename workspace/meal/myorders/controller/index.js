import React from 'react';
import Nav from '../components/nav/';
import List from '../components/list/';
import {connect} from 'react-redux';
import * as actions from '../actions/';
import * as wxActions from '../../actions/wx.sdk';

const Myorders = ({...rest}) => {
	if(rest.list.length == 0){
		rest.init();
	}
	return(
		<div>
			<Nav/>
			<List
				list = {rest.list}
				nomore = {rest.nomore}
				myOrdersLoadMore = {rest.myOrdersLoadMore}
				OrderDetail = {rest.OrderDetail}
			/>
		</div>
	)
}

const mapStateToProps = state => ({
	list:state.list,
	nomore:state.nomore,
})

const mapDispatchToProps = dispatch => ({
	init:() => {
		dispatch(actions.myOrders());
        dispatch(wxActions.wxHide());
	},
	myOrdersLoadMore:(start,nomore,count = 6) => {
		dispatch(actions.myOrdersLoadMore(start,nomore,count))
	},
	OrderDetail:(oid) => {
		dispatch(actions.OrderDetail(oid))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Myorders)
