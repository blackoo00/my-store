import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory , IndexRoute} from 'react-router';
import Example from './components/Example';
import StoreApp from './components/StoreApp';
import Pdetail from './components/pdetail/index';
// import confirmOrderWap from './components/confirmOrder/index';
import confirmOrderWap from './containers/confirmOrder/SettleController';
import AddressList from './components/address/list';
import AddAddress from './components/address/add';
import Wxpay from './components/wxpay/wxpay';
import Search from './components/search/search';
// import Cart from './components/cart/cart';
import Cart from './containers/cart/CartContainer';
import My from './components/my/my';
import MyQrcode from './components/my/myqrcode';
import FastClick from 'fastclick';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'
import reducer from './reducers/index';
import { getAllProducts } from './actions/carts'

 class Container extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showContent: true,
        }
    }
    componentWillEnter(){
        // let options = render.findDOMNode(this.refs.options)
        // options.style.display = 'block'
        // setTimeout(() => {
        //     this.setState({ filter: '', active: true })
        // }, 0)
    }
 
    componentWillMount() {
        // document.body.style.margin = "0px";
        // // 这是防止页面被拖拽
        // document.body.addEventListener('touchmove', (ev) => {
        //     ev.preventDefault();
        // });
    }
 
    render() {
        const { children } = this.props;
        let content = this.state.showContent ? children : false;
        return (
            <ReactCSSTransitionGroup
              component="div"
              transitionName="page"
              // transitionAppear={true}
              // transitionAppearTimeout={500}
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
              >
                <div key={this.props.location.pathname} className="page">
                    {
                        content
                    }
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}

const middleware = [ thunk ];

if (process.env.NODE_ENV == 'production') {
  middleware.push(createLogger());
}
const store = createStore(
  reducer,
  applyMiddleware(thunk,createLogger())
)

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Container}>
        <IndexRoute component={StoreApp} />
        <Route path="example" component={Example}/>
        <Route path="pdetail" component={Pdetail}/>
        <Route path="confirmOrderWap" component={confirmOrderWap}/>
        <Route path="AddressList" component={AddressList}/>
        <Route path="AddAddress" component={AddAddress}/>
        <Route path="Wxpay" component={Wxpay}/>
        <Route path="Search" component={Search}/>
        <Route path="Cart" component={Cart}/>
        <Route path="My" component={My}/>
        <Route path="MyQrcode" component={MyQrcode}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('wrapper')
)
// render((
//   <Router history={hashHistory}>
//     <Route path="/" component={Container}>
//         <IndexRoute component={StoreApp} />
//         <Route path="example" component={Example}/>
//         <Route path="pdetail" component={Pdetail}/>
//         <Route path="confirmOrderWap" component={confirmOrderWap}/>
//         <Route path="AddressList" component={AddressList}/>
//         <Route path="AddAddress" component={AddAddress}/>
//         <Route path="Wxpay" component={Wxpay}/>
//         <Route path="Search" component={Search}/>
//         <Route path="Cart" component={Cart}/>
//         <Route path="My" component={My}/>
//         <Route path="MyQrcode" component={MyQrcode}/>
//     </Route>
//   </Router>
// ), document.getElementById('wrapper'));