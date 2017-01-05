import React from 'react';
import ReactDom from 'react-dom';
import { hashHistory } from 'react-router';

export default React.createClass({
	handleInfo(data){
		console.log(data);
	},
	handleAddAddress(){
		var consignee = ReactDom.findDOMNode(this.refs.consignee).value;
		var tel = ReactDom.findDOMNode(this.refs.tel).value;
		var address = ReactDom.findDOMNode(this.refs.address).value;
		if(consignee == ''){
			$.alert('请输入姓名');
		}
		if(tel == ''){
			$.alert('请输入电话');
		}
		if(address == ''){
			$.alert('请输入详细地址');
		}
		//写入数据库
		$.ajax({
			url:ADDRESSSERVER+"add",
			data:{consignee:consignee,tel:tel,address:address},
			type:'post',
			dataType:'json',
			success:function(data){
				if(data.status != 1){
					$.alert(data.info);
				}
				if(data.status == 1){
					hashHistory.push('/AddressList');
				}
			}
		})
	},
	render(){
		return(
			<div className="my-address-add-wrap">
				<div className="header">
					<span className="back"></span>
					<span>管理收货地址</span>
				</div>
				<div className="weui_cells weui_cells_access">
				  <a className="weui_cell" href="javascript:;">
				    <div className="weui_cell_bd weui_cell_primary">
				      <p><input className="weui_input" ref="consignee" type="text" placeholder="姓名"/></p>
				    </div>
				    <div className="weui_cell_ft"></div>
				  </a>
				  <a className="weui_cell" href="javascript:;">
				    <div className="weui_cell_bd weui_cell_primary">
				      <p><input className="weui_input" ref="tel" type="tel" placeholder="电话"/></p>
				    </div>
				    <div className="weui_cell_ft"></div>
				  </a>
				  <a className="weui_cell" href="javascript:;">
				    <div className="weui_cell_bd weui_cell_primary">
				      <p><input className="weui_input" ref="address" type="text" placeholder="详细地址"/></p>
				    </div>
				    <div className="weui_cell_ft"></div>
				  </a>
				</div>
				<button id="actionBtn" onClick={this.handleAddAddress}>保存地址</button>
			</div>
		);
	}
})