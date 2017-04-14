import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Perf from 'react-addons-perf';

class Container extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showContent: true,
        }
    }
    componentWillEnter(){
        Perf.start();
        Perf.stop();
        let r = Perf.getLastMeasurements();
        Perf.printInclusive(r);
        Perf.printWasted(r)
        // let options = render.findDOMNode(this.refs.options)
        // options.style.display = 'block'
        // setTimeout(() => {
        //     this.setState({ filter: '', active: true })
        // }, 0)
        
    }
 
    componentWillMount() {
        // console.log('aa');
        // document.body.style.margin = "0px";
        // // 这是防止页面被拖拽
        // document.body.addEventListener('touchmove', (ev) => {
        //     ev.preventDefault();
        // });
        
    }
    componentWillUnmount(){
    }
    // handleScrollPosition(){
    //     window.scrollTo(0, 100)
    // }
 
    render() {
        const { children } = this.props;
        let content = this.state.showContent ? children : false;
        // this.handleScrollPosition();
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
module.exports = Container;