import React from 'react';
import ReactDom from 'react-dom';
import UP from '../../extend/ajaxfileupload.js';
import FileInput from '../../extend/fileInput';
import {FormList} from '../common/weui';
import MyQrcode from './myqrcode';

export default React.createClass({
	getInitialState(){
		return{
			info:[],
		}
	},
	componentWillMount(){
		this.handleGetMyInfo();
	},
	componentDidMount(){
	},
	handleUploadPic(){
		var _self = this;
		UP.ajaxFileUpload ({
			url: MYSERVER+'uploadPic',
			type: 'post',
			secureuri:false,
			fileElementId:'headimgurl',
			dataType: 'json',
			success: function (data,status){
				_self.handleGetMyInfo();
			},
		})
	},
	handleGetMyInfo(){
		$.getJSON(MYSERVER+'getMyInfo', function(json, textStatus) {
			this.setState({
				info:json.data,
			})
		}.bind(this));
	},
	render(){
		var qrcode = this.state.info.my_qrcode;
		return(
			<div className="my-wrap">

				<div className="user">
					<div className="set-btn">
						<p>设置</p>
					</div>
					<div className="user-photo">
						<input type="file" id="headimgurl" ref="headimgurl" name="headimgurl" onChange={this.handleUploadPic}/>
						<img src={this.state.info.headimgurl}/></div>
					<div className="user-nick">
						<p className="nick" id="J_myNick">{this.state.info.name}</p>
						<p className="level level3"></p>
					</div>
				</div>
				<section className="user-behavior userBehavior">
					<ul data-spm="1">
						<li>
							<a href="#">
								<p>41</p>
								<p>收藏的宝贝</p>
							</a>
						</li>
						<li>
							<a href="#">
								<p>17</p>
								<p>收藏的店铺</p>
							</a>
						</li>
						<li>
							<a href="#">
								<p>42</p>
								<p>我的足迹</p>
							</a>
						</li>
					</ul>
				</section>
				<section className="order-act" data-spm="2">
					<ul className=" orderAct" id="orderAct3">
						<li>
							<a href="//h5.m.taobao.com/mlapp/olist.html?tabCode=waitPay">
								<p>
									<span className="order-icons icon-pay"></span>
								</p>
								<p className="sub">待付款</p>
							</a>
						</li>
						<li>
							<a href="//h5.m.taobao.com/mlapp/olist.html?tabCode=waitSend">
								<p>
									<span className="order-icons icon-send"></span>
								</p>
								<p className="sub">待发货</p>
							</a>
						</li>
						<li>
							<a href="//h5.m.taobao.com/mlapp/olist.html?tabCode=waitConfirm">
								<p>
									<span className="order-icons icon-deliver"></span>
								</p>
								<p className="sub">待收货</p>
								<p className="number">1</p>
							</a>
						</li>
						<li>
							<a href="//h5.m.taobao.com/mlapp/olist.html?tabCode=waitRate">
								<p>
									<span className="order-icons icon-evaluate"></span>
								</p>
								<p className="sub">待评价</p>
								<p className="number">4</p>
							</a>
						</li>
						<li>
							<a href="//h5.m.taobao.com/awp/mtb/olist.htm?sta=3">
								<p>
									<span className="order-icons icon-refund"></span>
								</p>
								<p className="sub">退款/售后</p>
							</a>
						</li>
					</ul>
					<div className="weui_cells weui_cells_access">
						<FormList value="查看全部订单" icon="form" href="/Cart"/>
					</div>
				</section>
				<div className="weui_cells weui_cells_access">

					<FormList value="购物车" icon="cart" href="/Cart"/>
					<FormList value="二维码" icon="code" href="/MyQrcode" query={qrcode}/>
				</div>
			</div>
		)
	}
})