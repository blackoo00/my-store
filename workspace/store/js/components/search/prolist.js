import React from 'react';
import Search from '../common/search';
import './_search.scss';
/*
	*参数说明
	*handleSearchPro：onChange促发搜索事件
	*handleCancelSearch：取消搜索（包括关键词清空和点击取消或叉叉按钮）
	*refs：input按钮（获取数据用）
	*searchText：搜索框内容
 */

const ProList = ({...rest}) => (
	<div id="search-wrap">
		<Search
			handleSearchPro = {rest.handleSearchPro}
			handleCancelSearch = {rest.handleCancelSearch}
			refs = {rest.refs}
			searchText = {rest.searchText}
		/>
		<section className="searchcontent">
			<div className="search-list list-view">
				<ul>
					<div className="page-container">
						{rest.children}
					</div>	
				</ul>
			</div>
		</section>
	</div>
)

export default ProList

