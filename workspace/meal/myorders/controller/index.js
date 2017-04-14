import React from 'react';
import Nav from '../components/nav/';
import List from '../components/list/';
import {connect} from 'react-redux';
import * as actions from '../actions/';
import * as wxActions from '../../actions/wx.sdk';
import ScrollLoadMore from '../../../common/components/scroll-loadmore/';

class Myorders extends React.Component{
    componentWillMount(){
        let {list,init} = this.props;
        if(list.length == 0){
            init();
        }
    }
    render(){
        let {...rest} = this.props;
        return(
            <div>
                <Nav/>
                <ScrollLoadMore
                    nomore = {rest.nomore}
                    myOrdersLoadMore = {rest.myOrdersLoadMore}

                >
                    <List
                        list = {rest.list}
                        OrderDetail = {rest.OrderDetail}
                    />
                </ScrollLoadMore>
            </div>
        )
    }
}

const mapStateToProps = state => ({
	list:state.list,
	nomore:state.nomore,
})

const mapDispatchToProps = dispatch => ({
	init:() => {
		dispatch(actions.myOrders());
        dispatch(wxActions.wxHide());
	},
	myOrdersLoadMore:(start,nomore,count = 6) => {
		dispatch(actions.myOrdersLoadMore(start,nomore,count))
	},
	OrderDetail:(oid) => {
		dispatch(actions.OrderDetail(oid))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Myorders)
