import React from 'react';
import Wpay from '../components/wpay';
import {connect} from 'react-redux';
import * as actions from '../actions/'
import Search from '../../home/components/search/search';

import * as wxActions from '../../actions/wx.sdk';

let tid = '';

class wpay extends React.Component{
    componentWillMount(){
        let {init} = this.props;
        init();
    }
    render(){
        let {PayOrder} = this.props;
        return(
            <div>
                <Wpay
                    PayOrder = {() => {PayOrder(tid.value)}}
                    refs = {node => {tid = node}}
                />
            </div>
        )
    }
}

// const wpay = ({...rest}) => (
// 	<div>
// 		<Wpay
// 			PayOrder = {() => {rest.PayOrder(tid.value)}}
// 			refs = {node => {tid = node}}
// 		/>
// 	</div>
// )

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    init:() => {
        dispatch(wxActions.wxHide())
    },
	PayOrder:(table_id) => {
		if(table_id != ''){
			dispatch(actions.PayOrder(table_id))
		}
	},
})
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(wpay)
