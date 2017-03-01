import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/search';
import ProList from '../../components/search/prolist';
import ProItem from '../../components/search/item';
import {Link,hashHistory} from 'react-router';
let seachkey = '';

class SearchContainer extends React.Component{
	componentWillMount(){
		let {...rest} = this.props;
		rest.init();
		rest.handleWindowScroll(rest.loadMorePro);

	}
	componentWillUnmount(){
		let {...rest} = this.props;
		window.removeEventListener('scroll',rest.loadMorePro);
	}
	render(){
		let {...rest} = this.props;
		return(
			<ProList
				handleSearchPro = {() => {rest.handleSearchPro(seachkey.value)}}
				handleCancelSearch = {() => {rest.handleCancelSearch()}}
				refs = {node => {seachkey = node}}
			>
				{rest.list.map(item => {
					if(item.name.includes(rest.searchText)){
						return(
							<ProItem
								key = {item.id}
								elem = {item}
								ProDetails = {()=>{rest.LinkToDetails(item.id)}}
							/>
						)
					}
				}
				)}
			</ProList>
		)
	}
}

// const SearchContainer = ({...rest}) => {

// 	if(rest.list.length == 0){
// 		rest.init();
// 	}else if(rest.bindscroll == 0){
// 		rest.handleWindowScroll();
// 	}

// 	return(
// 		<ProList
// 			handleSearchPro = {() => {rest.handleSearchPro(seachkey.value)}}
// 			handleCancelSearch = {() => {rest.handleCancelSearch()}}
// 			refs = {node => {seachkey = node}}
// 		>
// 			{rest.list.map(item => {
// 				if(item.name.includes(rest.searchText)){
// 					return(
// 						<ProItem
// 							key = {item.id}
// 							elem = {item}
// 							ProDetails = {()=>{rest.LinkToDetails(item.id)}}
// 						/>
// 					)
// 				}
// 			}
// 			)}
// 		</ProList>
// 	)
// }

const mapStateToProps = (state) => ({
	list:state.search.list,
	searchText:state.search.searchText,
	count:state.search.count,
	bindscroll:state.search.bindscroll,
})

const mapDispatchToProps = (dispatch) => ({
	//初始化
	init:() => {
		dispatch(actions.getProList())
	},
	//搜索
	handleSearchPro:(keys) => {
		dispatch(actions.searchPro(keys))
	},
	//取消搜索
	handleCancelSearch:() => {
		dispatch(actions.cancelSearch())
	},
	//产品跳转
	LinkToDetails:(pid) =>{
		hashHistory.push({pathname:'/pdetail',query:{id:pid}})
	},
	//滚动加载
	handleWindowScroll:(cb) => {
		window.addEventListener('scroll',cb)
	},
	loadMorePro:() => {
		if((document.body.scrollTop + document.body.clientHeight) >= document.body.scrollHeight){
			let count = $('.page-container li').length;
			console.log(count);
			dispatch(actions.searchGetMorePro(count,4))
		}
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchContainer)

