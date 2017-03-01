import React from 'react';
import {hashHistory} from 'react-router';

export default React.createClass({
	getInitialState(){
		return{
			cart_list:[],
			choose_num:0,
			total_fee:0,
			choose_all:false,
		}
	},
	componentDidMount(){
		var _self = this;
		$.ajax({
			url:STORESERVER + 'getCartList',
			success:function(data){
				_self.setState({
					cart_list:data.data,
				})
			}
		});
	},
	//编辑按钮
	handleEdit(data){
		var cart_list = this.state.cart_list;
		cart_list[data]['edit'] = !cart_list[data]['edit'];
		this.setState({
			cart_list:cart_list,
		})
	},
	//减少购物车商品数量
	handleDel(data){
		var cart_list = this.state.cart_list;
		var choose_num = this.state.choose_num;
		var total_fee = this.state.total_fee;
		if(cart_list[data]['number'] > 1){
			var number = cart_list[data]['number'];
			number --;
			choose_num --;
			total_fee -= parseInt(cart_list[data]['goods_price']);
			this.handleEditCartNum(data,number,choose_num,total_fee);
		}
	},
	//增加购物车商品数量
	handleAdd(data){
		var cart_list = this.state.cart_list;
		var number = cart_list[data]['number'];
		var choose_num = this.state.choose_num;
		var total_fee = this.state.total_fee;
		number ++;
		choose_num ++;
		total_fee += parseInt(cart_list[data]['goods_price']);
		this.handleEditCartNum(data,number,choose_num,total_fee);
	},
	//编辑购物车商品数量
	handleEditCartNum(index,number,choose_num,total_fee){
		var cart_list = this.state.cart_list;
		var _self = this;
		$.ajax({
			url:STORESERVER+'editCartNumById',
			data:{cid:cart_list[index]['id'],number:number},
			success:function(data){
				if(data.stauts == -1){
					$.alert(data.info);
				}else{
					cart_list[index]['number'] = number;
					_self.setState({
						cart_list:cart_list,
						choose_num:choose_num,
						total_fee:total_fee,
					})
				}
			}
		});
	},
	//删除购物信息
	handleDelete(data){
		var cart_list = this.state.cart_list;
		var _self = this;
		var index = data;
		$.ajax({
			url:STORESERVER+'deleteCartById',
			data:{cid:cart_list[data]['id']},
			success:function(data){
				if(data.status == 1){
					cart_list[index]['delete'] = 1;
					_self.setState({
						cart_list:cart_list,
					})
				}else{
					$.alert(data.info);
				}
			}
		});
	},
	handleChoose(index){
		var cart_list = this.state.cart_list;
		cart_list[index]['checked'] = !cart_list[index]['checked'];
		var choose_num = this.state.choose_num;
		var total_fee = this.state.total_fee;
		if(cart_list[index]['checked']){
			total_fee += cart_list[index]['goods_price'] * cart_list[index]['number']
			choose_num ++;
		}else{
			total_fee -= cart_list[index]['goods_price'] * cart_list[index]['number']
			choose_num --;
		}
		this.setState({
			cart_list:cart_list,
			choose_num:choose_num,
			total_fee:total_fee,
		})
	},
	//选择全部
	handleChooseAll(){
		var cart_list = this.state.cart_list;
		var checked;
		var total_fee = 0;
		var choose_num = 0;
		//判断是选择还是取消
		if(!this.state.choose_all){
			choose_num = cart_list.length;
			checked = true;
		}else{
			checked = false;
		}
		cart_list.map(function(elem, index) {
			cart_list[index]['checked'] = checked;
			if(checked){
				total_fee += cart_list[index]['goods_price'] * cart_list[index]['number'];
			}
		}.bind(this));
		this.setState({
			cart_list:cart_list,
			choose_all:!this.state.choose_all,
			choose_num:choose_num,
			total_fee:total_fee,
		})
	},
	//结算
	handleSettlement(){
		var cart_list = this.state.cart_list;
		var cidstr = '';
		cart_list.map(function(elem, index) {
			if(elem.checked){
				cidstr += elem['id'] + ',';
			}
		})
		if(cidstr){
			hashHistory.push({pathname:"/confirmOrderWap",query:{cart_id:cidstr}});
		}else{
			$.alert('还未选择');
		}
	},	
	render(){
		var cart_list = this.state.cart_list;
		var carts = [];
		if(cart_list.length != 0){
			cart_list.filter(function(data){
				return(data.delete != 1);
			}).map(function(elem, index) {
				carts.push(
					<div className="bundlev2" key={index}>
						<div className="shop">
							<div className="o-t-title-shop">
								<div className="tcont">
									<div className="state">
										<div className="state-cont" onClick={this.handleEdit.bind(this,index)}>
											<p>{(elem.edit === true ? "完成" : "编辑")}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={(elem.edit ? "edit-true" : "edit-false") + " item-list o-t-item undefined"}>
							<div className="item-cb">
								<p >
									<input id={"cb-" + (index)} type="checkbox" className="cb o-t-cb" checked={elem.checked||''} onChange={this.handleChoose.bind(this,index)}/>
									<label htmlFor={"cb-" + (index)} ></label>
								</p>
							</div>
							<div className="item-detail" >
								<div>
									<div className="item-img" >
										<a href="//a.m.taobao.com/i538664564931.htm" >
											<img className="" src={elem.goods_logo} data-src-checked="true"/></a>
									</div>
									<div className="item-info">
										<a href="//a.m.taobao.com/i538664564931.htm">
											<h3 className="title">{elem.goods_name}</h3>
											<div className="sku">
												<p>{elem.goods_attr}</p>
											</div>
										</a>
										<div className="pay">
											<div className="pay-price">
												<div className="price">
													<p className="o-t-price">
														<span>
															{elem.goods_price}
														</span>
													</p>
												</div>
												<div className="originPrice">
													<p> <del>￥{elem.market_price}</del>
													</p>
												</div>
											</div>
											<div className="quantity">
												<p>
													<span>x</span>
													<span>{elem.number}</span>
												</p>
											</div>
										</div>
									</div>
									<div className="item-info2">
										<div className="edit-quantity">
											<p className="btn-minus">
												<a className="btn minus off" min="1" onClick={this.handleDel.bind(this,index)}></a>
											</p>
											<p className="btn-input">
												<input type="tel" value={elem.number} readOnly/></p>
											<p className="btn-plus">
												<a className="btn plus" onClick={this.handleAdd.bind(this,index)}></a>
											</p>
										</div>
										<div className="edit-sku">
											<div>
												<p>{elem.goods_attr}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="item-del c-edit-delhide" onClick={this.handleDelete.bind(this,index)}>
								<p>删除</p>
							</div>
						</div>
					</div>
				)
			}.bind(this))
		}
		return(
			<div className="cart-wrap">
				<div className="header">
					<span>购物车({cart_list.length})</span>
				</div>
				<div className="cartbuy">
					{carts}
					<div className="footer">
						<div className="f-fx">
							<div>
								<div className="ft-cb">
									<p>
										<input id="cb-footer" type="checkbox" className="cb o-t-cb"/>
										<label htmlFor="cb-footer" onClick={this.handleChooseAll}></label>
									</p>
								</div>
								<div className="qx">全选</div>
								<div className="pay">
									<div>
										<div>
											<span className="hj">合计：</span>
											<p className="o-t-price" data-symbol="￥">
												<span>{this.state.total_fee}</span>
											</p>
										</div>
										<p>不含运费</p>
									</div>
								</div>
								<div className="btn" onClick={this.handleSettlement}>
									<p>
										<span>结算({this.state.choose_num})</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
})