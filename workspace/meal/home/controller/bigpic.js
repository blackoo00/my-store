import React from 'react';
import {connect} from 'react-redux';
import BigPic from '../components/bigpic/';
import * as actions from '../actions/prods';

const BigPicController = ({...rest}) => (
	<BigPic
		name = {rest.info.name}
		price = {rest.info.price}
		logourl = {rest.info.logourl}
		show = {rest.show}
		closeProdPic = {() => {rest.closeProdPic()}}
	/>
)

const mapStateToProps = state => ({
	info:state.bigpic.info,
	show:state.bigpic.show
})

const mapDispatchToProps = dispatch => ({
	closeProdPic:() => {
		dispatch(actions.closeProdPic())
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BigPicController)