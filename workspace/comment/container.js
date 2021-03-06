import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Footer from '../common/components/footer';
import * as WxActions from '../common/actions/wx.sdk';
import {connect} from 'react-redux';

class Container extends React.Component {
    componentWillMount(){
        let {wxShare} = this.props;
        wxShare();
    }
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
             </div>
        );
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch =>  ({
    wxShare:(pathname)=>{
        if(pathname == '/' || pathname == '/intro'){
            dispatch(WxActions.wxShare());
        }else{
            dispatch(WxActions.wxHide());
        }
    }
})

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);
