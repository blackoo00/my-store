import React from 'react';
import Search from '../components/search/search';
import {connect} from 'react-redux';
import * as Prodsactions from '../actions/prods';
import * as actions from '../actions/'

let searchkey = '';

const search = ({...rest}) => (
	<Search 
		search = {() => {rest.search(searchkey.value)}}
		refs = {node => {searchkey = node}}
		LinkToMyOrders = {() => {rest.LinkToMyOrders()}}
		getSurplusProds = {() => {rest.getSurplusProds(rest.cids)}}
		searchkey = {rest.searchkey}
	/>
)

const mapStateToProps = state => ({
	cids:state.cats.chooseIds,
	searchkey:state.search.searchkey
})

const mapDispatchToProps = dispatch => ({
	search:(key) => {
		dispatch(Prodsactions.searchProds(key))
	},
	LinkToMyOrders:() => {
		dispatch(actions.LinkToMyOrders())
	},
	getSurplusProds:(cids) => {
		dispatch(Prodsactions.getSurplusProds(cids))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(search)