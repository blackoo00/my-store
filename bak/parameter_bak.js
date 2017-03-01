import React from 'react';
import {hashHistory} from 'react-router';


module.exports = React.createClass({
	getInitialState(){
		return{
			choose_attr:[],//显示选择的东西
			choose_show:'',//显示选择信息
			choose_sid_arr:[],//选中的属性(以规格为键值)
			choose_aid:[],//选中属性ID
			num:1,//数量
			price:0,//价格
			choose_did:0,//选择的属性表单ID
		}
	},
	componentWillMount(){
		
	},
	//选择规格
	handleChooseAttr(data){
		// console.log(data);
		var choose_show = '';
		var pdetail = this.props.proDetail.detail;
		var choose_sid_arr = this.state.choose_sid_arr;
		var choose_aid = [];
		//赋值选中规格属性
		choose_sid_arr[data['sid']] = data;

		for(var i in choose_sid_arr){
			choose_aid.push(choose_sid_arr[i]['id']);
		}
		//重新计算价格
		if(choose_aid.length == 2){
			var new_price = pdetail[choose_aid[0]][choose_aid[1]].price;
			var choose_did = pdetail[choose_aid[0]][choose_aid[1]].id;
			if(!isNaN(new_price) && !isNaN(choose_did)){
				this.setState({
					price:new_price,
					choose_did:choose_did,
				})
			}
		}
		this.setState({
			choose_show:choose_show,
			choose_aid:choose_aid,
			choose_sid_arr:choose_sid_arr,
		})
	},
	handleDelNum(){
		var num = this.state.num;
		num == 1 ? num = 1 : num--;
		this.setState({
			num: num,
		})
	},
	handleAddNum(){
		var num = this.state.num;
		num++;
		this.setState({
			num: num,
		});
	},
	//加入购物车
	handleAddCart(){
		var pro = this.props.proDetail;
		var _self = this;
		var did = _self.state.choose_did;
		var num = _self.state.num;
		console.log(pro);
		if(did == 0 && pro.detail){
			$.alert("请选择规格！", "警告！");
			return;
		}
		$.ajax({
			url:'http://127.0.0.1/my-store/index.php/Home/Store/addProductToCart',
			data:{pid:pro.id,did:did,num:num},
			success:function(data){
				//判断是立即购买还是加入购物车
				if(_self.props.Buy){
					// window.location.href="#/confirmOrderWap";
					hashHistory.push({ pathname: '/confirmOrderWap', query: { cart_id: data.data } });
					// _self.props.history.replaceState(null, 'confirmOrderWap');
				}else{
					if(data.info != ''){
						$.toast(data.info, function() {
				            _self.props.handleClosePra();
				        });
					}
				}
			}
		})
	},
	render(){
		var pro = this.props.proDetail;
		var attr = [];
		var choose_show = [];
		var choose_aid = this.state.choose_aid;
		if(pro.length != 0){
			var pro_attr;
			this.state.choose_attr.length == 0 ? pro_attr = pro.attr : pro_attr = this.state.choose_attr;
			// console.log(pro_attr);
			/*规格*/
			for(var s in pro_attr){
				var sa = [];
				/*属性*/
				for(var a in pro_attr[s]['child']){
					sa.push(
						<label key={a} className={choose_aid.indexOf(pro_attr[s]['child'][a].id) > -1 ? "checked" : ""} onClick={this.handleChooseAttr.bind(this,pro_attr[s]['child'][a])}>{pro_attr[s]['child'][a].value}</label>
					)
				}
				attr.push(
					<li key={s} className="J_SkuGroup mui-sku-group">
						<h2>{pro_attr[s]['value']}</h2>
						<div className="items">
							{sa}
						</div>
					</li>
				);
			}
		}
		if(this.state.choose_show !=''){
			choose_show.push(
				<div key="choose_attr" className="sku-dtips">
					已选择:
					<div dangerouslySetInnerHTML={{__html: this.state.choose_show}} />
				</div>
			);
		}
		return(
			<div className="mui-cover" id="product-parameter-wrapper">
				<div className="summary">
					<div className="img">
						<img src={pro.logo} alt=""/>
					</div>
					<div className="main">
						<div className="priceContainer">
							<span className="price">¥
							{this.state.price == 0 ? pro.price : this.state.price}
							</span>
						</div>
						<div className="stock-control">
							<span className="stock">
								<label className="label">库存</label>
								{pro.number}件
							</span>
							<span className="limitTip"></span>
						</div>
						{choose_show}
					</div>
					<a className="sback" onClick={this.props.handleClosePra}></a>
				</div>
				<div className="body">
					<section id="s-decision">
						<div className="sku-control">
							<ul className="mui-sku">
								{/*<li id="J_SkuGroup_-1" className="J_SkuGroup mui-sku-group">
									<h2>情侣款</h2>
									<div className="items">
										<label data-value="-1:-1" className="checked">男款</label>
									</div>
								</li>*/}
								{attr}
								{/*<li className="J_SkuGroup mui-sku-group">
									<h2>尺码</h2>
									<div className="items">
										<label data-value="20549:103189693">38</label>
										<label data-value="20549:418624880">39</label>
										<label data-value="20549:229418985">40</label>
										<label data-value="20549:407396361">41</label>
										<label data-value="20549:473680452" className="checked">42</label>
										<label data-value="20549:225078235">43</label>
										<label data-value="20549:64797379">44</label>
										<label data-value="20549:72380707" className="disabled">37</label>
									</div>
								</li>
								<li className="J_SkuGroup mui-sku-group">
									<h2>颜色分类</h2>
									<div className="items">
										<label data-value="1627207:130379246" className="checked">黑色加绒款</label>
										<label data-value="1627207:868432813" className="disabled">9988兰色</label>
										<label data-value="1627207:382872590">棕色加绒款</label>
										<label data-value="1627207:1562895773" className="disabled">黑底单里款</label>
										<label data-value="1627207:1562895774" className="disabled">白底单里款</label>
										<label data-value="1627207:9327298">1680黑色</label>
										<label data-value="1627207:773340211">1680棕色</label>
									</div>
								</li>*/}
							</ul>
						</div>
						<div className="number">
							<h2>数量</h2>
							<div className="content">
								<div className="number-control">
									<div className="mui-number">
										<button type="button" className="decrease disabled" onClick={this.handleDelNum}>-</button>
										<input type="number" readOnly className="num" value={this.state.num} min={this.state.num} max={pro.number} step="" name="quantity"/>
										<button type="button" className="increase" onClick={this.handleAddNum}>+</button>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
				<div className="option mui-flex">
					<button className="ok cell" onClick={this.handleAddCart}>确定</button>
					<button className="cart cell" style={{display: 'none'}}>加入购物车</button>
					<button className="buy cell" style={{display: 'none'}}>立即购买</button>
				</div>
			</div>
		)
	}
})
