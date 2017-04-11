import React from 'react';

const index = ({themeColor,data}) => (
    <div>
        <div className="weui-cells">
            <div className="weui-cell">
                <div className="weui-cell__bd">付款金额</div>
                <div className="weui-cell__ft">￥{data.total_fee}</div>
            </div>
            <div className="weui-cell">
                <div className="weui-cell__bd">房型名称</div>
                <div className="weui-cell__ft">{data.pname}人房</div>
            </div>
            <div className="weui-cell">
                <div className="weui-cell__bd">入住时间</div>
                <div className="weui-cell__ft">{data.intimevalue}</div>
            </div>
            <div className="weui-cell">
                <div className="weui-cell__bd">保留时间</div>
                <div className="weui-cell__ft">{data.keeptime}</div>
            </div>
            <div className="weui-cell">
                <div className="weui-cell__bd">房间数量</div>
                <div className="weui-cell__ft">{data.total}</div>
            </div>
            <div className="weui-cell">
                <div className="weui-cell__bd">入住人</div>
                <div className="weui-cell__ft">{data.name}</div>
            </div>
            <div className="weui-cell">
                <div className="weui-cell__bd">联系手机</div>
                <div className="weui-cell__ft">{data.tel}</div>
            </div>
        </div>
        <div className="weui-cells__title">支付方式</div>
        <div className="weui-cells weui-cells_radio">
            <div className="weui-cell weui-check__label">
                <div className="weui-cell__bd" style={{display:'flex',alignItems:'center'}}><span style={{color:'#0fcd1a',fontSize:'23px'}} className="iconfont icon-weixin"></span><span>微信支付</span></div>
                <div className="weui-cell__ft">
                    <div>
                        <input type="radio" className="weui-check" name="radio1" value="1" defaultChecked /><span className="weui-icon-checked"></span></div>
                </div>
            </div>
        </div>
        <div style={{padding:'15px'}}>
            <button className="weui-btn weui-btn_primary" style={{background:themeColor}}>提交</button>
        </div>
    </div>
)

export default index
