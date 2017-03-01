import React from 'react';
import { Router, Route, hashHistory, browserHistory, applyRouterMiddleware, IndexRoute} from 'react-router';
import Example from './components/Example';
import StoreApp from './containers/index/index';
import Pdetail from './containers/pdetailS/PdetailsController';
import confirmOrderWap from './containers/confirmOrder/SettleController';
import AddressList from './containers/address/ListController';
import AddAddress from './containers/address/AddController';
import Wxpay from './components/wxpay/wxpay';
import Search from './containers/search/SearchController';
import Cart from './containers/cart/CartContainer';
import My from './components/my/my';
import MyQrcode from './components/my/myqrcode';
import Container from './container';

const Routes = ({saveScroll,getScroll}) => (
    <Router history={hashHistory}>
      <Route path="/" component={Container}>
        <IndexRoute component={StoreApp} />
        <Route path="example" component={Example}/>
        <Route path="pdetail" onEnter={()=>getScroll('pdetail')} component={Pdetail}/>
        <Route path="confirmOrderWap" component={confirmOrderWap}/>
        <Route path="AddressList" component={AddressList}/>
        <Route path="AddAddress" component={AddAddress}/>
        <Route path="Wxpay" component={Wxpay}/>
        <Route path="Search" onEnter={()=>getScroll('Search')} onLeave = {()=>saveScroll('Search')} component={Search}/>
        <Route path="Cart" component={Cart}/>
        <Route path="My" component={My}/>
        <Route path="MyQrcode" component={MyQrcode}/>
      </Route>
    </Router>
)

export default Routes