import React from 'react';
import Header from '../../../common/components/header/';
import OrderInfo from '../components/orderinfo';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import * as actions from '../actions/';

class settle extends React.Component{
    componentDidMount(){
        let {init,order,keeptimes} = this.props;
        init(order.livedays,keeptimes[0]);
    }
    render(){
        let {...rest} = this.props;
        return(
            <div>
                <Header
                    value = {'结算中心'}
                    back = {true}
                    pathname = {'/'}
                    bgcolor = {THEME_COLOR}
                />
                <OrderInfo
                    themeColor = {THEME_COLOR}
                    order = {rest.order}
                    roomnums = {rest.roomnums}
                    keeptimes = {rest.keeptimes}
                    chooseRoomNum = {rest.chooseRoomNum}
                    chooseKeepTime = {rest.chooseKeepTime}
                    signInName = {rest.signInName}
                    signInTel = {rest.signInTel}
                    settle = {() => {rest.settle(rest.order,rest.keeptimes[0],rest.roomnums[0])}}
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
    init: (livedays,keeptime) => {
        dispatch(actions.infoInit(keeptime));
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
    settle:(order,defaultkeeptime,defaulttotal) => {
        if(order.name == ''){
            $.alert('请输入入住人姓名');
            return false;
        }
        if(order.tel == ''){
            $.alert('请输入入住人电话');
            return false;
        }
        dispatch(actions.settle(order,defaultkeeptime,defaulttotal));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(settle)
