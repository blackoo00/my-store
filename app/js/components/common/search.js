import React from 'react';

/*
	*参数说明
	*handleSearchPro：onChange促发搜索事件
	*handleCancelSearch：取消搜索（包括关键词清空和点击取消或叉叉按钮）
	*refs：input按钮（获取数据用）
	*searchText：搜索框内容
 */

const Search = ({...rest}) => (
	<div className="weui_search_bar" id="search_bar">
	  <div className="weui_search_outer">
	    <div className="weui_search_inner"> <i className="weui_icon_search"></i>
	      <input type="search" onChange={rest.handleSearchPro} ref={rest.refs} className="weui_search_input" id="search_input" placeholder={rest.searchText || '你搜一个试试！'} required/>
	      <a href="javascript:" className="weui_icon_clear" id="search_clear" onClick={rest.handleCancelSearch}></a>
	    </div>
	    <label className="weui_search_text" id="search_text"> 
	      <i className="weui_icon_search"></i>
	      <span>你搜一个试试！</span>
	    </label>
	  </div>
	  <a href="javascript:" className="weui_search_cancel" id="search_cancel" onClick={rest.handleCancelSearch}>取消</a>
	</div>
)

export default Search;