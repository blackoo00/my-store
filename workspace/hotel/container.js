import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Footer from '../common/components/footer';

class Container extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showContent: true,
        }
    }
    render() {
        const { children } = this.props;
        let content = this.state.showContent ? children : false;
        let pathname = this.props.location.pathname;
        let footer_index = 0;
        switch(pathname){
            case '/myorders':
                footer_index = 1;
                break;
            case '/my':
                footer_index = 2;
                break;
            default:
                footer_index = 0;
                break;
        }
        let footer_data = [['icon-home','首页'],['icon-dingdan1','订单'],['icon-geren','我的']];
        let paths = ['/','/myorders','/my'];
        return (
            <div>
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
                {pathname == '/' || pathname == '/myorders' || pathname == '/my' ? <Footer
                    data = {footer_data}
                    paths = {paths}
                    clicknum = {footer_index}
                    clickcolor = {'#33bbaf'}
                />: ''}
             </div>
        );
    }
}
module.exports = Container;
