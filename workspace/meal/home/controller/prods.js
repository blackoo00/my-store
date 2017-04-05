import React from 'react';
import Prods from '../components/main/prods/prods';
import * as Prodsactions from '../actions/prods';
import {connect} from 'react-redux';

const ProdsController = ({...rest}) => {
	if(rest.list.length == 0){
		rest.init(rest.chooseId);
	}
	let list = [];
	rest.searchs.length != 0 ? list = rest.searchs : list = rest.list[rest.chooseId];
	return(
		<Prods 
			list = {list}
			addToCart = {rest.addToCart}
			delCartNums = {rest.delCartNums}
			chooses = {rest.chooses}
			showProdPic = {rest.showProdPic}
			searchkey = {rest.searchkey}
		/>
	)
}

const mapStateToProps = state => ({
	list:state.prods.list,
	chooseId:state.cats.chooseId,
	searchs:state.prods.searchs,
	chooses:state.prods.chooses,
	searchkey:state.search.searchkey
})

const mapDispatchToProps = dispatch => ({
	init:(cid) => {
		dispatch(Prodsactions.prodsInfo(cid));
	},
	addToCart:(pinfo,searchkey) => {
		dispatch(Prodsactions.addToCart(pinfo,searchkey));
	},
	delCartNums:(pinfo) => {
		dispatch(Prodsactions.delCartNums(pinfo));
	},
	searchProds:(key) => {
		dispatch(Prodsactions.searchProds(key));
	},
	//显示大图
	showProdPic:(info,searchkey) => {
		dispatch(Prodsactions.showProdPic(info,searchkey));
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProdsController)