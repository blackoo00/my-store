import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import Index from '../../components/index/index';

class IndexContainer extends React.Component{
	componentWillMount(){
		let {...rest} = this.props;
		rest.init();
	}
	render(){
		let {...rest} = this.props;
		return(
			<Index
				ban = {rest.ban}
				pro = {rest.pro}
				cat = {rest.cat}
			/>
		)
	}
}

const mapStateToProps = (state) => ({
	pro:state.home.pro,
	ban:state.home.ban,
	cat:state.home.cat
})

const mapDispatchToProps = (dispatch) => ({
	init:()=>{
		dispatch(actions.indexInit())
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(IndexContainer)