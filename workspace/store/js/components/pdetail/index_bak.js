import React from 'react';
import SwiperDom from '../common/SwiperDom';
import { Link, hashHistory } from 'react-router';
import Paramenter from './parameter.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default React.createClass({
	getInitialState(){
		return{
			ban:[],
			pro:[],
			col:false,
			showpar:true,
			paranimate:'',
			buy:false,
		};
	},
	componentWillMount(){
		//获取商品ID
		var pid = this.props.location.query.id;
		var _self = this;
		//获取商品banner
		$.ajax({
			url:"http://127.0.0.1/my-store/index.php/Home/Store/getProDetail",
			data:{pid:pid},
			dataType:'json',
			success:function(data){
				console.log(data);
				_self.setState({
					ban:data.ban,
					pro:data.pro,
					col:data.col,
				})
			}
		})
	}, 
	//加入购物车
	handleShowPra(){
		this.setState({
			showpar:true,
			paranimate:'show',
		})
	},
	//立即购买
	handleBuyNow(){
		// { pathname: 'confirmOrderWap', query: { id: 1 } }
		// hashHistory.push({ pathname: '/confirmOrderWap', query: { id: 1 } });
		this.setState({
			showpar:true,
			paranimate:'show',
			buy:true,
		})
	},
	//关闭弹出框
	handleClosePra(){
		this.setState({
			showpar:false,
			paranimate:'hide',
		})
	},
	//收藏
	handleCollection(){
		var _self = this;
		$.ajax({
			url:'http://127.0.0.1/my-store/index.php/Home/Store/collection',
			data:{pid:_self.state.pro.id},
			success:function(data){
				$.toast(data.info, function() {
		          console.log('close');
		        });
				if(data.status == 1){
					_self.setState({
						col:!_self.state.col,
					})
				}
			}
		})
	},
	render(){
		var parameter;
		if(this.state.showpar){
			parameter = <Paramenter handleClosePra={this.handleClosePra} proDetail={this.state.pro} Buy={this.state.buy}/>
		}
		return(
			<div className="pro-detail-wrapper">
				<div className="pro-banner">
					<SwiperDom BanList = {this.state.ban}/>
				</div>
				<div className="pro-detail">
					<div className="page-module-item">
						<div className="pro-name">{this.state.pro.name}</div>
						<div className="pro-price">￥{this.state.pro.price}</div>
					</div>
					<div className="page-module-item">
						<div dangerouslySetInnerHTML={{__html: this.state.pro.desc}} />
					</div>
				</div>
				<div className="bottom_bar">
					<Link to="/">
						<div className="bottom_bar_icon service">客服</div>
					</Link>
					<div className={(this.state.col ?"active":"") + " bottom_bar_icon collection iconfont"} onClick={this.handleCollection}>
					{(this.state.col ? '已收藏' : '收藏')}
					</div>
					<div className="sys_button cart" onClick={this.handleShowPra}>加入购物车</div>
					<div className="sys_button buy" onClick={this.handleBuyNow}>立即购买</div>
				</div>
				<ReactCSSTransitionGroup
				  component="div"
		          transitionName="mui"
		          className={this.state.paranimate}
		          transitionEnterTimeout={300}
		          transitionLeaveTimeout={300}
		          >
	            {parameter}
	            </ReactCSSTransitionGroup>
			</div>
		)
	}
})