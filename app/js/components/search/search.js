import React from 'react';
import FastClick from 'fastclick';

export default React.createClass({
	getInitialState(){
		return{
			pro_list:[],
			searchText:'',
			scroll:true,
		}
	},
	componentWillMount(){
		var _self = this;
		$.ajax({
			url:STORESERVER+'proList',
			async:false,
			success:function(data){
				_self.setState({
					pro_list:data.data,
				});
			}
		});
	},
	componentDidMount(){
		// FastClick.attach(document.body);
		var loading = false;
		var _self = this;
		$(document.body).infinite().on("infinite", function() {
			var pro_quantity = _self.state.pro_list.length;
		  	if(loading || !_self.state.scroll) return;
		  	console.log(_self.state.scroll);
		  	loading = true;
		  	setTimeout(function(){
		  		$.ajax({
		  			url:"http://127.0.0.1/my-store/index.php/Home/Store/scrollLoadPro",
		  			data:{count:pro_quantity},
		  			async:false,
		  			success:function(data){
		  				loading = false;
		  				if(data.length != pro_quantity){
		  					_self.setState({
		  						pro_list:data,
		  					});
		  				}else{
		  					_self.setState({
		  						scroll:false,
		  					});
		  				}
		  			}
		  		})
		  	  	loading = false;
		  	},500);
		});
	},
	handleSearchPro(){
		var searchKey = this.refs.searchKey.value;
		this.setState({
			searchText:searchKey,
		})
	},
	handleCancelSearch(){
		this.setState({
			searchText:'',
		})
	},
	render(){
		var pro_list = this.state.pro_list;
		var pros = [];
		if(pro_list.length != 0){
			pro_list.filter(function(data) {
				return (data.name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) > -1);
		    }.bind(this)).map(function(elem, index) {
				pros.push(
					<li key={index}>
						<div className="list-item">
							<div className="p">
								<a href="#" title="">
									<img className="p-pic" src={elem.logo}/>
									<span className="flag c-icon-pt"></span>
								</a>
							</div>
							<div className="d">
								<a href="#" title="">
									<h3 className="d-title">{elem.name}</h3>
								</a>
								<p className="d-price"> <em className="h"><span className="price-icon">¥</span>
										<span className="font-num">{elem.price}</span></em>  <del><span className="price-icon">¥</span>
										<span className="font-num">{elem.market_price}</span></del> 
								</p>
								<div className="d-main">
									<p className="d-freight">{(elem.mail_price > 0 ? elem.mail_price : '免运费')}</p>
									<p className="d-num">
										<span className="font-num">{elem.sales_count}</span>
										人付款
									</p>
									<p className="d-area">台州</p>
								</div>
							</div>
						</div>
						<div className="icons-group"></div>
					</li>
				);
			})
		}
		return(
			<div className="search-wrap">
				<div className="weui_search_bar" id="search_bar">
				  <form className="weui_search_outer">
				    <div className="weui_search_inner"> <i className="weui_icon_search"></i>
				      <input type="search" onChange={this.handleSearchPro} ref="searchKey" className="weui_search_input" id="search_input" placeholder="你搜一个试试！" required/>
				      <a href="javascript:" className="weui_icon_clear" id="search_clear" onClick={this.handleCancelSearch}></a>
				    </div>
				    <label htmlFor="search_input" className="weui_search_text" id="search_text" onClick={this.handleSearch}> 
				      <i className="weui_icon_search"></i>
				      <span>你搜一个试试！</span>
				    </label>
				  </form>
				  <a href="javascript:" className="weui_search_cancel" id="search_cancel" onClick={this.handleCancelSearch}>取消</a>
				</div>
				<section className="searchcontent">
					<div className="search-list list-view">
						<ul>
							<div className="page-container">
								{pros}
							</div>	
						</ul>
					</div>
				</section>
				<div className="weui-infinite-scroll">
				  <div className="infinite-preloader"></div>
				  正在加载
				</div>
			</div>
		)
	}
})