import React from 'react';
import {connect} from 'react-redux';
import AddAddress from '../../components/address/add';
import * as actions from '../../actions/address';

let name,tel,address;

const AddContainer = ({handleAddAddress,list,init}) => {
	if(list.length == 0){
		init();
	}
	return(
		<AddAddress
			name = {node => {name = node}}
			tel = {node => {tel = node}}
			address = {node => {address = node}}
			handleAddAddress={()=>{handleAddAddress()}}
		/>
	)
}

const mapStateToProps = (state) => ({
	list:state.address.list
})

const mapDispatchTpProps = (dispatch) => ({
	init:() => {
		dispatch(actions.getMyAddresses())
	},	
	handleAddAddress:()=>{
		dispatch(actions.addAddress(name.value,tel.value,address.value))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchTpProps
)(AddContainer)

