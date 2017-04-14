import React from 'react';
import {connect} from 'react-redux';
import AddList from '../../components/address/list';
import AddItem from '../../components/address/additem';
import * as actions from '../../actions/address';
import '../../components/address/_address.scss';

const ListContainer = React.createClass({
	componentWillMount(){
		let {list,init} = this.props;
		if(list.length == 0){
			init();
		}
	},
	render(){
		let {list,handleChoose} = this.props;
		return(
			<AddList>
				{list.map((item,index)=>(
					<AddItem
						key = {index}
						elem = {item}
						handleChoose = {()=>{handleChoose(item.id)}}
					/>
				))}
			</AddList>
		)
	}
}) 


const mapStateToProps = (state) => ({
	list:state.address.list
})

const mapDispatchToProps = (dispatch) =>({
	init:() => {
		dispatch(actions.getMyAddresses())
	},	
	handleChoose:(aid) => {
		dispatch(actions.setDefaultAddress(aid))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListContainer)
