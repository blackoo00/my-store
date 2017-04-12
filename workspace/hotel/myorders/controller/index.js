import React from 'react';
import Footer from '../../../common/components/footer';
import WeuiNav from '../../../common/components/weui-nav/';
import * as actions from '../actions/';
import {connect} from 'react-redux';
import MyOrdersList from '../components/list';

class myorders extends React.Component{
    componentWillMount(){
        let {init} = this.props;
        init();
    }
    render(){
        let footer_data = [['icon-home','首页'],['icon-dingdan1','订单'],['icon-geren','我的']]
        let nav_data = ['全部','待入住','已入住'];
        let {showlist,lived,chooseLive} = this.props;
        return(
            <div>
                <WeuiNav
                    data = {nav_data}
                    active = {lived}
                    active_color = {'#33bbaf'}
                    choose = {chooseLive}
                />
                <MyOrdersList
                    list = {showlist}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    showlist:state.myorders.showlist,
    lived:state.myorders.lived
})

const mapDispatchToProps = dispatch => ({
    init:() => {
        dispatch(actions.myOrders());
    },
    chooseLive:(lived) => {
        dispatch(actions.chooseLive(lived))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(myorders)
