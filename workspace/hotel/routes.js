import React from 'react';
import { Router, Route, hashHistory, IndexRoute} from 'react-router';
import {connect} from 'react-redux';
import * as WxActions from '../common/actions/wx.sdk';

import Container from './container';
import Settle from './settle/controller/';
import Home from './home/controller/';
import Pay from './pay/controller/';
import MyOrders from './myorders/controller/';
import My from './my/controller/';
import MyInfo from './my/controller/myinfo';
import Feedback from './my/controller/feedback';
import CompanyIntro from './home/controller/intro';

const Routes = ({wxShare,wxHide}) => (
    <Router history={hashHistory}>
        <Route path = "/" component = {Container}>
            <IndexRoute onEnter={() => {wxShare()}} component = {Home} />
            <Route onEnter={() => {wxHide()}} path = 'settle' component = {Settle} />
            <Route path = 'pay' component = {Pay} />
            <Route onEnter={() => {wxHide()}} path = 'myorders' component = {MyOrders} />
            <Route path = 'my' component = {My} />
            <Route path = 'myinfo' component = {MyInfo} />
            <Route path = 'feedback' component = {Feedback} />
            <Route path = 'intro' component = {CompanyIntro} />
        </Route>
    </Router>
)

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch =>  ({
    wxShare:()=>{
        dispatch(WxActions.wxShare());
    },
    wxHide:() => {
        dispatch(WxActions.wxHide());
    }
})

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(Routes);
