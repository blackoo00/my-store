import React from 'react';
import { Button,Modal } from 'react-bootstrap';
import * as actions from '../actions/settle';
import * as orderActions from '../../order/actions/';
import {connect} from 'react-redux';
import OrderProdList from '../../common/components/title-list-name-num-price/';

import * as wxActions from '../../actions/wx.sdk';



class Settle extends React.Component{
	componentWillMount(){
		let {init} = this.props;
		init();
	}
	render(){
		const wellStyles = {maxWidth: 400, margin: '0 auto 10px', border:'none',backgroundColor:'rgba(0,0,0,0)'};
		const OrderProdListStyles = {marginTop: 20};
		const {plist,totalFee,total,company,id,pay,tid,copyOrder} = this.props;
		return(
			<div className="static-modal">
				    <Modal.Header>
				      	<Modal.Title>{company}</Modal.Title>
				    </Modal.Header>
				      	<OrderProdList
  							title = {'订单结算(桌位号#'+tid + ')'}
  							total = {total}
  							list = {plist}
  							totalFee = {totalFee}
  						/>
				    <Modal.Footer>
						<Button bsStyle="success" bsSize="large" block onClick={()=>{pay(id)}}>微信支付({totalFee}元)</Button>
				    </Modal.Footer>
			</div>
		)
	}
}

const mapStateToProps = state =>({
	plist:state.plist,
	totalFee:state.totalFee,
	company:state.company,
	total:state.total,
	id:state.id,
	tid:state.tid,
})

const mapDispatchToProps = dispatch => ({
	init:() => {
        dispatch(actions.settleInit());
		dispatch(wxActions.wxHide());
	},
	pay:(oid) => {
		dispatch(actions.payOrder(oid));
	},
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Settle)
