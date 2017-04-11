import React from 'react';
import Header from '../../../common/components/header/';
import OrderInfo from '../components/orderinfo';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import * as actions from '../actions/';

class settle extends React.Component{
    componentWillMount(){
        let {init,order} = this.props;
        init(order.livedays);
    }
    render(){
        let {...rest} = this.props;
        return(
            <div>
                <Header
                    value = {'结算中心'}
                    back = {true}
                    pathname = {'/'}
                    bgcolor = '#33bbaf'
                />
                <OrderInfo
                    themeColor = '#33bbaf'
                    order = {rest.order}
                    roomnums = {rest.roomnums}
                    keeptimes = {rest.keeptimes}
                    chooseRoomNum = {rest.chooseRoomNum}
                    chooseKeepTime = {rest.chooseKeepTime}
                    signInName = {rest.signInName}
                    signInTel = {rest.signInTel}
                    settle = {() => {rest.settle(rest.order)}}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    order:state.order,
    roomnums:state.settle.roomnums,
    keeptimes:state.settle.keeptimes,
})

const mapDispatchToProps = dispatch => ({
    init: (livedays) => {
        dispatch(actions.infoInit());
        if(livedays <= 0){
            // hashHistory.push({pathname:'/'})
            dispatch(actions.init())
        }
    },
    chooseRoomNum:(num) => {
        dispatch(actions.chooseRoomNum(num));
    },
    chooseKeepTime:(time) => {
        dispatch(actions.chooseKeepTime(time));
    },
    signInName:(name) => {
        dispatch(actions.signInName(name))
    },
    signInTel:(tel) => {
        dispatch(actions.signInTel(tel))
    },
    settle:(order) => {
        if(order.name == ''){
            $.alert('请输入入住人姓名');
            return false;
        }
        if(order.tel == ''){
            $.alert('请输入入住人电话');
            return false;
        }
        dispatch(actions.settle(order));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(settle)
