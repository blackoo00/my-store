import React from 'react';
import OrderProdList from '../../common/components/title-list-name-num-price/';
import {connect} from 'react-redux';

const OPList = ({...rest}) => (
	<OrderProdList
		title = '所有菜品'
		list = {rest.detail.prods}
		total = {rest.detail.total}
		totalFee = {rest.detail.totalFee}
	/>
) 

const mapStateToProps = state => ({
	detail:state.detail.data,
})

const mapDispatchToProps = dispatch => ({
	
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(OPList)