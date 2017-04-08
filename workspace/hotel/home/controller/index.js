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
        let {indexbans,indexprods} = this.props;
        let icons = ['icon-home','icon-dingdan1','icon-geren']
        return(
            <div style={{fontSize:'14px'}}>
                <SwiperDom
                    BanList = {indexbans}
                />
                <NameTel/>
                <BaiduMap/>
                <Address/>
                <TimeChoose/>
                <HoustList
                    list = {indexprods}
                />
                <Footer
                    icons = {icons}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    indexbans:state.indexbans,
    indexprods:state.indexprods
})

const mapDispatchToProps = dispatch => ({
    init:() => {
        dispatch(actions.indexInit());
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(home)
