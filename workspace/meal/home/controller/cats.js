import React from 'react';
import Cats from '../components/main/cats/cats';
import { connect } from 'react-redux'
import * as Catsactions from '../actions/cats';
import * as Prodsactions from '../actions/prods';

const CatsController = ({...rest}) => {
	if(rest.cats.length == 0){
		rest.init();
	}
	return(
		<Cats
			list = {rest.cats}
			ChooseCat = {rest.ChooseCat}
			chooseId = {rest.chooseId}
			cnums = {rest.cnums}
			prods = {rest.prods}
		/>
	)
}

const mapStateToProps = (state) => ({
	cats:state.cats.list,
	chooseId:state.cats.chooseId,
	cnums:state.cats.cnums,
	prods:state.prods.list
})

const mapDispatchToProps = (dispatch) => ({
	init:(cid) => {
		dispatch(Catsactions.CatInfo())
	},
	ChooseCat:(cid,prods) => {
		dispatch(Catsactions.ChooseCat(cid));
		if($.type(prods[cid]) === 'undefined'){
			dispatch(Prodsactions.prodsInfo(cid));
		}
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CatsController)