import React from 'react';
import {Link} from 'react-router';

const index = () => (
    <div>
        <div className="weui-cells">
            <Link to="/myinfo" className="weui-cell weui-cell_access">
                <div className="weui-cell__hd iconfont icon-bangding" style={{fontSize:'20px',color:'#33bbaf'}}></div>
                <div className="weui-cell__bd">个人信息</div>
                <div className="weui-cell__ft"></div>
            </Link>
            <Link to="/myorders" className="weui-cell weui-cell_access">
                <div className="weui-cell__hd iconfont icon-dingdan1" style={{fontSize:'20px',color:'#33bbaf'}}></div>
                <div className="weui-cell__bd">我的订单</div>
                <div className="weui-cell__ft"></div>
            </Link>
            <Link to="/feedback" className="weui-cell weui-cell_access">
                <div className="weui-cell__hd iconfont icon-liuyan" style={{fontSize:'20px',color:'#33bbaf'}}></div>
                <div className="weui-cell__bd">留言反馈</div>
                <div className="weui-cell__ft"></div>
            </Link>
        </div>
    </div>
)

export default index
