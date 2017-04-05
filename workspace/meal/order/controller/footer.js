import React from 'react';
import {connect} from 'react-redux';
import * as wxActions from '../../actions/wx.sdk';
import * as settleActions from '../../settle/actions/settle';
import {Button, Modal} from 'react-bootstrap';

import OrderFooter from '../components/footer';
import WxScan from '../components/footer/wxscan';
class footer extends React.Component{
	componentWillMount(){
		let {init} = this.props;
		// init();
	}
	render(){
		let {config,status,table_id,totalFee,pay,id,wxscan} = this.props;
		if(status == 0){
			if(table_id != 0){
				return(
					<div>
						{/*<Modal.Footer>
							<Button bsStyle="link" bsSize="large" block onClick={() => {wxscan()}}>更换座位(当前#{table_id})</Button>
						</Modal.Footer>*/}
						<OrderFooter>
							<Modal.Footer>
								<Button bsStyle="success" bsSize="large" block onClick={()=>{pay(id)}}>微信支付({totalFee}元)</Button>
							</Modal.Footer>
						</OrderFooter>
					</div>
				)
			}else{
				return(
					<OrderFooter>
						<WxScan
							wxscan = {() => {wxscan()}}
						/>
					</OrderFooter>
				)
			}
		}else{
			return(
				<div></div>
			)
		}
	}
}

const maptStateToProps = state => ({
	config:state.qrcode.config,
	status:state.detail.status,
	table_id:state.detail.table_id,
	totalFee:state.detail.data.totalFee,
	id:state.detail.data.id
})

const mapDispatchToProps = dispatch => ({
	init:()=>{
		dispatch(wxActions.getScanConfig());
	},
	pay:(oid) => {
		dispatch(settleActions.payOrder(oid));
	},
	wxscan:() => {
		dispatch(wxActions.wxScan())
	}
})

export default connect(
	maptStateToProps,
	mapDispatchToProps
)(footer)
