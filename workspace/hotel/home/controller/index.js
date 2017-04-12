import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/';
import SwiperDom from '../../components/SwiperDom';
import NameTel from '../components/nameTel';
import BaiduMap from '../components/baidumap';
import Address from '../components/address';
import TimeChoose from '../components/timechoose';
import HoustList from '../components/houselist';
import Footer from '../../../common/components/footer';

class home extends React.Component{
    componentWillMount(){
        let {init} = this.props;
        init();
    }
    render(){
        let {...rest} = this.props;
        let footer_data = [['icon-home','首页'],['icon-dingdan1','订单'],['icon-geren','我的']]
        return(
            <div style={{fontSize:'14px'}}>
                <SwiperDom
                    BanList = {rest.home.indexbans}
                />
                <NameTel
                    info = {rest.home.info}
                />
                <BaiduMap/>
                <Address/>
                <TimeChoose
                    intime = {rest.intime}
                    outtime = {rest.outtime}
                />
                <HoustList
                    list = {rest.home.indexprods}
                    livedays = {rest.order.livedays}
                    intime = {rest.order.intime}
                    outtime = {rest.order.outtime}
                    orderRoom = {rest.orderRoom}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    home:state.home,
    order:state.order
})

const mapDispatchToProps = dispatch => ({
    init:() => {
        dispatch(actions.indexInit());
    },
    intime:(value,values) => {
        dispatch(actions.inTime(value,values))
    },
    outtime:(value,values) => {
        dispatch(actions.outTime(value,values))
    },
    orderRoom:(livedays,pid,price,intime,outtime) => {
        if(livedays <= 0){
           $.alert('请选择入驻与退房时间')
        }else{
            dispatch(actions.orderRoom(pid,price,intime,outtime,livedays))
        }
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(home)
