var React = require('react');
var SwiperDom = require('../common/SwiperDom');
var Cat = require('./cat');
var YourLike = require('./yourlike');
import {hashHistory} from 'react-router';
import ReactDom from 'react-dom';

var StoreIndex = React.createClass({
	getInitialState:function(){
		return{
			cat:[],
			pro:[],
			ban:[],
			scroll:true,
		};
	},
	componentWillMount:function(){
		window.removeEventListener('scroll', this.handleScrollLoadPro);
		// document.body.style.margin = "0px";
        // 这是防止页面被拖拽
        // document.body.addEventListener('touchmove', (ev) => {
        //     ev.preventDefault();
        // });
		//获取分类信息
		var _self = this;
		$.ajax({
			url:STORESERVER+"index",
			success:function(data){
				_self.setState({
					cat:data.cat,
					pro:data.pro,
					ban:data.ban,
				});
			}
		});
	},
	componentDidMount(){
		window.addEventListener('scroll', this.handleScrollLoadPro);
	},
	//滑动加载商品
	handleScrollLoadPro:function(){
		//判断是否滚动到底部
		if((document.body.scrollTop + document.body.clientHeight) >= document.body.scrollHeight){
			var count = this.state.pro.length;
			var _self = this;
			if(_self.state.scroll){
				var loading = false;
				if(loading) return false;
				loading = true;
				$.ajax({
					url:STORESERVER+"scrollLoadPro",
					data:{count:count},
					success:function(data){
						loading = false;
						if(data.length != count && _self.isMounted()){
							_self.setState({
								pro:data,
							});
						}else{
							if(_self.isMounted()){
								_self.setState({
									scroll:false,
								});
							}
						}
					}
				})
			}
		}
	},
	handleSearch(){
		hashHistory.push({pathname:'/Search'});
	},
	render:function(){
		return(
			<div className="index-wrap">
				<div className="weui_search_bar" id="search_bar">
				  <form className="weui_search_outer">
				    <div className="weui_search_inner"> <i className="weui_icon_search"></i>
				      <input type="search" className="weui_search_input" id="search_input1" placeholder="你搜一个试试！" required/>
				      <a href="javascript:" className="weui_icon_clear" id="search_clear"></a>
				    </div>
				    <label htmlFor="search_input1" className="weui_search_text" id="search_text" onClick={this.handleSearch}> 
				      <i className="weui_icon_search"></i>
				      <span>你搜一个试试！</span>
				    </label>
				  </form>
				  <a href="javascript:" className="weui_search_cancel" id="search_cancel">取消</a>
				</div>
				<div className="page-module-item">
					<SwiperDom BanList={this.state.ban}/>
					<Cat CatList={this.state.cat}/>
				</div>
				<YourLike 
					ProList={this.state.pro} 
				/>
			</div>
		)
	}
})
module.exports = StoreIndex;