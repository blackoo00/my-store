import React from 'react';
import ReactDom from 'react-dom';
import {Link,hashHistory} from 'react-router';

var confirmOrderWrap = React.createClass({
	getInitialState(){
		return{
			cart:[],
			address:[],
			total_fee:0,
			total_num:0,
		};
	},
	componentWillMount(){
		//接受购物车ID
		var cid = this.props.location.query.cart_id;
		var _self = this;
		$.ajax({
			url:STORESERVER+"getCartInfoById",
			data:{cid:cid},
			success:function(data){
				if(data.status == 1){
					_self.setState({
						'cart' : data.data.cart,
						'address' : data.data.address,
						'total_fee' : data.data.total_fee,
						'total_num' : data.data.total_num,
					})
				}else{
					hashHistory.push({pathname:'/'});
				}
			}
		});
	},
	//减少购买数量
	handleDel(index){
		var cart = this.state.cart;
		var total_fee = this.state.total_fee;
		var total_num = this.state.total_num;
		cart[index]['number']--;
		total_num --;
		total_fee -= parseInt(cart[index]['goods_price']);
		this.handleOperation(cart,index,cart[index]['number'],total_fee,total_num);
	},
	//增加购买数量
	handleAdd(index){
		var cart = this.state.cart;
		var total_fee = this.state.total_fee;
		var total_num = this.state.total_num;
		cart[index]['number']++;
		total_num ++;
		total_fee += parseInt(cart[index]['goods_price']);
		this.handleOperation(cart,index,cart[index]['number'],total_fee,total_num);
	},
	//赋值购买数量并计算总价
	handleOperation(cart,index,number,total_fee,total_num){
		var _self = this;
		console.log(number);
		console.log(cart[index]['id']);
		$.ajax({
			url:STORESERVER+'editCartNumById',
			data:{number:number,cid:cart[index]['id']},
			success:function(data){
				if(data.status !=1){
					$.alert(data.info);
				}else{
					_self.setState({
						cart:cart,
						total_fee:total_fee,
						total_num:total_num,
					})
				}
			}
		});
	},
	//提交订单
	handleSubmitOrder(){
		var postscript = ReactDom.findDOMNode(this.refs.postscript).value;
		var cart = this.state.cart;
		var cidstr = '';
		cart.map(function(elem, index) {
			cidstr += elem.id + ',';
		})
		$.ajax({
			url:STORESERVER+'orderSave',
			data:{postscript:postscript,cid:cidstr},
			type:'post',
			dataType:'json',
			async:false,
			success:function(data){
				$.alert(data.info,function(){
					if(data.status == 1){
						hashHistory.push({ pathname: '/Wxpay',query: {order_sn:data.data.order_sn,user_name:data.data.user_name,total_fee:data.data.total_fee} });
					}else{
						hashHistory.push({pathname:'/'});
					}
				});
			}
		})
	},
	render(){
		var cart_id = this.props.location.query.cart_id;
		var cart = this.state.cart;
		var prolist = [];
		if(cart.length != 0){
			cart.map(function(elem, index) {
				prolist.push(
					<div className="pro-list" key={index}>
						<div className="weui_cell">
							<div className="weui_cell_hd">
								<img className="product-logo" src={elem.goods_logo} alt="" width="20"/>
							</div>
							<div className="weui_cell_bd weui_cell_primary">
								<p className="order-product-name">{elem.goods_name}</p>
								<p className="sku-info">{elem.goods_attr}</p>
							</div>
							<div className="weui_cell_ft">
								<p className="main-price">￥{elem.goods_price}</p>
								<p>X{elem.number}</p>
							</div>
						</div>
						<div className="weui_cell">
							<div className="weui_cell_bd weui_cell_primary">
								<p>购买数量</p>
							</div>
							<div className="weui_cell_ft order-quantity">
								<div className="content cell">
									<a className="btn minus off" onClick={this.handleDel.bind(this,index)}></a>
									<input className="amount" type="number" value={elem.number || ''} readOnly/>
									<a className="btn plus" onClick={this.handleAdd.bind(this,index)}></a>
								</div>
							</div>
						</div>
					</div>
				);
			}.bind(this))
		}
		return(
			<div className="confirm-order-wrapper">
				<div className="order-address weui_cells weui_cells_access">
					<Link className="weui_cell" to={{pathname:'/AddressList',query:{ cart_id: cart_id }}}>
						<div className="weui_cell_hd">
							<div className="address-icon iconfont">&#xe617;</div>
						</div>
						<div className="weui_cell_bd weui_cell_primary">
							<p>收货人:{this.state.address.consignee}({this.state.address.tel})</p>
							<p>
								{this.state.address.address}
							</p>
						</div>
						<div className="weui_cell_ft"></div>
					</Link>
				</div>
				<div className="order-order">
					<div className="weui_cells_title">商品描述</div>
					<div className="weui_cells">
						{prolist}
						<div className="weui_cell">
							<div className="weui_cell_bd weui_cell_primary">
								<p>留言</p>
							</div>
							<div className="weui_cell_ft order-remark">
								<input className="amount" ref="postscript" placeholder="选填:你填一个试试？"/>
							</div>
						</div>
					</div>
				</div>
				<div className="order-submitOrder" id="submitOrder_1">
					<div className="mui-flex align-center" >
						<div className="cell realPay" >
							<div className="realPay-wrapper">
								<span >共</span>
								<span className="count" >{this.state.total_num}</span>
								<span >件，</span>
								<span>总金额</span>
								<span className="price">
									<span className="dollar">￥</span>
									<span className="main-price" >{this.state.total_fee}</span>
								</span>
							</div>
						</div>
						<div className="cell fixed action">
							<div className="mui-flex align-center" >
								<span title="提交订单" onClick={this.handleSubmitOrder}>提交订单</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
})

module.exports = confirmOrderWrap;