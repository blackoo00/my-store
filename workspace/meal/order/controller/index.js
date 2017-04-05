import React from 'react';
import TopBtnController from './topbtn';
import DetailController from './detail';
import OPList from './list';
import OrderFooter from './footer';
import Qrcode from '../components/qrcode';
import '../../common/css/style.css';
import {connect} from 'react-redux';

import * as wxActions from '../../actions/wx.sdk';

class Order extends React.Component{
    componentWillMount(){
        let {init} = this.props;
        init();
    }
    render(){
        return(
            <div>
                <TopBtnController/>
                <DetailController/>
                <OPList/>
                <OrderFooter/>
                <Qrcode/>
            </div>
        )
    }
}

const mapStateToProps = state =>({

})

const mapDispatchToProps = dispatch =>({
    init:() => {
        dispatch(wxActions.wxHide())
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Order)
