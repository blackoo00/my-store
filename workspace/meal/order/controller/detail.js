import React from 'react';
import Detail from '../components/detail';
import Qrcode from '../components/qrcode/';
import {connect} from 'react-redux';
import * as actions from '../actions/';

import ActionSheet from '../../common/components/actionsheet/';

import WxScan from '../components/footer/wxscan';
import * as wxActions from '../../actions/wx.sdk';


const DetailController = ({...rest}) => {
	if(rest.detail.length == 0){
		rest.init();
	}
	return(
		<div>
			<Detail
                detail = {rest.detail}
                table_id = {rest.table_id}
				company = {rest.detail.company}
				time = {rest.detail.time}
				orderid = {rest.detail.orderid}
				orderScanResult = {() => {rest.orderScanResult(rest.detail.id,rest.status)}}
                wxscan = {() => {rest.wxscan()}}
			/>
			<ActionSheet
				show = {rest.show}
				toggleActionSheet = {() => {rest.toggleActionSheet()}}
				hasHeader = {true}
				title = {'服务员扫码下单'}
			>
				<Qrcode
					qrcode = {rest.qrcode}
				/>
			</ActionSheet>
		</div>
	)
}

const mapStateToProps = state => ({
	detail:state.detail.data,
	qrcode:state.qrcode.qrcode,
	show:state.qrcode.show,
    status:state.detail.status,
	table_id:state.detail.table_id,
})

const mapDispatchToProps = dispatch => ({
	init:() => {
		dispatch(actions.orderDetailInit())
	},
	orderScanResult:(oid,status) => {
		if(status == 0){
			dispatch(actions.orderScanResult(oid));
			dispatch(actions.toggleQrcode())
		}
	},
	toggleActionSheet:() => {
		dispatch(actions.toggleQrcode())
	},
    wxscan:() => {
        dispatch(wxActions.wxScan())
    }
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DetailController)
