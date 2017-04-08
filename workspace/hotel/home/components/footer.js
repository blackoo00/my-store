import React from 'react';

const index = () => (
    <div className="weui_tabbar" style={{position:'fixed',zIndex:1}}>
        <a href="javascript:;" className="weui_tabbar_item weui_bar_item_on">
            <div className="weui_tabbar_icon icon-home iconfont" style={{fontSize:'2.3em'}}>

            </div>
            <p className="weui_tabbar_label" style={{margin:0}}>微信</p>
        </a>
        <a href="javascript:;" className="weui_tabbar_item">
            <div className="weui_tabbar_icon icon-dingdan1 iconfont" style={{fontSize:'2.3em'}}>

            </div>
            <p className="weui_tabbar_label" style={{margin:0}}>通讯录</p>
        </a>
        <a href="javascript:;" className="weui_tabbar_item">
            <div className="weui_tabbar_icon icon-geren iconfont" style={{fontSize:'2.3em'}}>

            </div>
            <p className="weui_tabbar_label" style={{margin:0}}>发现</p>
        </a>
    </div>
)

export default index
