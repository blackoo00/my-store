import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Perf from 'react-addons-perf';
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
        // this.handleScrollPosition();
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
module.exports = Container;
