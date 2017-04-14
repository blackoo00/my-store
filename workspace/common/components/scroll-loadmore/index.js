import React from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import styles from './style.css';
import iScroll from "../../js/iscroll-probe";

class scrollLoadMore extends React.Component{
    componentDidMount() {
        let {myOrdersLoadMore,nomore} = this.props;
        let wh = window.innerHeight - 70;
        let _self = this;
        this.refs.tabsScroller.style.height = wh + "px";
        this.iScrollInstance3 = new iScroll('#tabsScroller', {
            mouseWheel: true,
            probeType: 3,
        });
        let minY = 0;
        this.iScrollInstance3.on('scrollStart', function() {
            minY = this.y;
        });

        this.iScrollInstance3.on('scroll', function() {
            minY = minY<this.y ? minY : this.y;
        });

        this.iScrollInstance3.on('scrollEnd', function() {
            minY = minY<this.y ? minY : this.y;
            if (this.y-minY>10 && (this.directionY===1)) {
                let start = $('#tabsScroller').find('li').length;
                myOrdersLoadMore(start,nomore)
            }
        });
    }
    componentDidUpdate() {
        this.iScrollInstance3.refresh();
    }
    render(){
        let {children,nomore} = this.props;
        return(
            <div styleName="myOrderslistWrap" id="tabsScroller" ref="tabsScroller">
                <ul>
                    {children}
                </ul>
            </div>
        )
    }
}

export default CSSModules(scrollLoadMore,styles)
