import React from 'react';
import styles from './style.css';
import CSSModules from 'react-css-modules';

const Search = ({search,refs,LinkToMyOrders,getSurplusProds,searchkey}) => {
	componentDidMount:{
		// document.onkeydown=function(){
	 //        if (event.keyCode == 13){
	 //        	console.log('ss');
	 //        	// search()
	 //        }
	 //    }
	    $("#mask").on('touchmove',function(event) { alert('ss'); event.preventDefault(); }, false);
	}
	return(
		<div styleName="searchWrap" id="mask">
			<input type="text" placeholder="搜索菜品名称" ref={refs} onClick={getSurplusProds} onChange={search} value={searchkey}/>
			<span styleName="searchBtn" onClick={LinkToMyOrders}>我的订单</span>
		</div>
	)
}

export default CSSModules(Search,styles);