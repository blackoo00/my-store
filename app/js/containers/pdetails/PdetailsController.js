import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/pdetails';
import SwiperDom from '../../components/common/SwiperDom';
import Spec from './SpectController';

const PdetailsContainer = React.createClass({
	componentWillMount(){
		let {init} = this.props;
		let pid = this.props.location.query.id;
		init(pid)
	},
	componentWillUnmount(){
		let {handleHidePra} = this.props;
		handleHidePra();
	},
	render(){
		let {pdetails,handleCollection,handleShowPra,handleHidePra} = this.props;
		let pro = pdetails.pro;
		return(
			<div className="pro-detail-wrapper">
				<div className="pro-banner">
					<SwiperDom BanList = {pdetails.ban}/>
				</div>
				<div className="pro-detail">
					<div className="page-module-item">
						<div className="pro-name">{pro.name}</div>
						<div className="pro-price">￥{pro.price}</div>
					</div>
					<div className="page-module-item">
						<div dangerouslySetInnerHTML={{__html: pro.desc}} />
					</div>
				</div>
				<div className="bottom_bar">
					<div className="bottom_bar_icon service">客服</div>
					<div className={(pdetails.col ?"active":"") + " bottom_bar_icon collection iconfont"} onClick={()=>{handleCollection(pro.id)}}>
					{(pdetails.col ? '已收藏' : '收藏')}
					</div>
					<div className="sys_button cart" onClick={()=>{handleShowPra('')}}>加入购物车</div>
					<div className="sys_button buy" onClick={()=>{handleShowPra('buy')}}>立即购买</div>
				</div>
				<Spec pdetails={pdetails}/>
			</div>
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