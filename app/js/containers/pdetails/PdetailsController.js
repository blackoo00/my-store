import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/pdetails';
import '../../components/pdetail/_parameter.scss';
import Pdetail from '../../components/pdetail/index';

const PdetailsContainer = React.createClass({
	componentDidMount(){
		let {init} = this.props;
		let pid = this.props.location.query.id;
		let h = (document.body.clientHeight - $('.bottom_bar').height());
		$('.pro-detail').height(h);
		setTimeout(()=>{
			init(pid)
		},200)
	},
	componentWillUnmount(){
		let {handleHidePra} = this.props;
		handleHidePra();
	},
	render(){
		let {pdetails,handleCollection,handleShowPra,handleHidePra} = this.props;
		let pro = pdetails.pro;
		return(
			<Pdetail
				test = {pdetails.ban.length}
				pdetails = {pdetails}
				handleCollection = {()=>{handleCollection(pro.id)}}
				addToCart = {()=>{handleShowPra('')}}
				buyNow = {()=>{handleShowPra('buy')}}
			/>
		)
	}
})

const mapStatetoProps = (state) =>({
	pdetails:state.pdetails,
})

const mapDispatchToProps = (dispatch) => ({
	init:(pid) => {
		dispatch(actions.proDetailInit(pid))
	},
	//收藏
	handleCollection:(pid) => {
		dispatch(actions.handleCollection(pid))
	},
	//显示规格选项
	handleShowPra:(arg) => {
		dispatch(actions.handleShowPra(arg))
	},
	//关闭商品规格选项
	handleHidePra:() => {
		dispatch(actions.handleHidePra())
	},
})

const getQueryString = () => {

}

export default connect(
	mapStatetoProps,
	mapDispatchToProps
)(PdetailsContainer)