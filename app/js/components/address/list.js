import React from 'react';
import {Link,hashHistory} from 'react-router';

export default React.createClass({
	getInitialState(){
		return{
			list:[],
		}
	},
	//选择默认
	handleChoose(data){
		var _self = this;
		var list = this.state.list;
		var cart_id = this.props.location.query.cart_id;
		list.map(function(elem, index) {
			list[index]['choose'] = 0;
		})
		list[data]['choose'] = 1;
		$.get(ADDRESSSERVER+'choose',{id:list[data]['id']},function(data){
			if(data.status == 1){
				_self.setState({
					list:list,
				});
				setTimeout(function(){
					hashHistory.push({pathname:'/confirmOrderWap',query:{cart_id:cart_id}});
				},100)
			}else{
				$.alert('修改失败');
			}
		})
	},
	componentWillMount(){
		var _self = this;
		$.ajax({
			url:ADDRESSSERVER+'showList',
			dataType:'json',
			success:function(data){
				_self.setState({
					list:data.data,
				});
			}
		});
	},
	render(){
		var list = this.state.list;
		var addList = [];
		list.map(function(elem, index) {
			addList.push(
				<li key={index} className={(elem.choose == 1 ? "active" : "") + " address-row"} onClick={this.handleChoose.bind(this,index)}>
					<div className="font0-75">
						<label>收货人:</label>
						<label>{elem.consignee}</label>
						<label className="address-tel">{elem.tel}</label>
					</div>
					<div>
						<label>收货地址:</label>
						<label>{elem.address}</label>
					</div>
					<span className="right-icons"> 
						<i className="iconfont icon-check"></i> 
						<i className="iconfont icon-right"></i>
					</span>
				</li>
			);
		}.bind(this));
		return(
			<div className="my-order-list">
				<div className="header">
					<span className="back"></span>
					<span>管理收货地址</span>
				</div>
				<div className="weui_cells weui_cells_access" style={{"marginTop":0}}>
					<a className="weui_cell choose-address-item" href="javascript:;">
						<div className="weui_cell_bd weui_cell_primary">
							<p>选择代收货地址</p>
						</div>
						<div className="weui_cell_ft"></div>
					</a>
				</div>
				<ul id="addressList">
				{addList}
				</ul>
				<Link to="/AddAddress">
					<button id="actionBtn">新增收货地址</button>
				</Link>
			</div>
		);
	}
})