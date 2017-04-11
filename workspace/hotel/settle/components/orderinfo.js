import React from 'react';

const index = ({settle,themeColor,roomnums,keeptimes,order,chooseRoomNum,chooseKeepTime,signInName,signInTel}) => (
    <div>
        <div className="weui-cells__title">您正在预定的房间:{order.pname}</div>
        <div className="weui-cells">
            <div className="weui-cell">
                <div className="weui-cell__bd">{order.intimevalue}至{order.outtimevalue}</div>
                <div className="weui-cell__ft">共{order.livedays}晚</div>
            </div>
            <div className="weui-cell weui-cell_select weui-cell_select-after">
                <div className="weui-cell__hd">
                    <div>
                        <span className="weui-label">房间数量</span>
                    </div>
                </div>
                <div className="weui-cell__bd">
                    <select className="weui-select" value={order.total} onChange={(e) => {chooseRoomNum(e.target.value)}}>
                        {roomnums.map(item => (
                            <option key={'roomnums' + item} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="weui-cell weui-cell_select weui-cell_select-after">
                <div className="weui-cell__hd">
                    <div>
                        <span className="weui-label">保留时间</span>
                    </div>
                </div>
                <div className="weui-cell__bd">
                    <select className="weui-select" onChange={(e) => {chooseKeepTime(e.target.value)}}>
                        {keeptimes.map(item => (
                            <option key={'keeptimes' + item} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="weui-cell">
                <div className="weui-cell__bd" style={{color:'#cc0000'}}>应付:￥{order.total_fee}</div>
            </div>
        </div>
        <div className="weui-cells__title">入驻信息</div>
        <div className="weui-cells">
            <div className="weui-cell">
                <div className="weui-cell__hd">
                    <div>
                        <span className="weui-label">入驻人</span>
                    </div>
                </div>
                <div className="weui-cell__bd">
                    <div>
                        <input value={order.name} onChange = {(e) => {signInName(e.target.value)}} className="weui-input" placeholder="请输入入驻人姓名"/><span className="weui-icon-checked"></span></div>
                </div>
            </div>
             <div className="weui-cell">
                <div className="weui-cell__hd">
                    <div>
                        <span className="weui-label">联系手机</span>
                    </div>
                </div>
                <div className="weui-cell__bd">
                    <div>
                        <input value={order.tel} onChange = {(e) => {signInTel(e.target.value)}} type="tel" className="weui-input" placeholder="请输入入住人手机号码"/><span className="weui-icon-checked"></span></div>
                </div>
            </div>
        </div>
        <div style={{padding:'15px'}}>
            <button className="weui-btn weui-btn_primary" style={{background:themeColor}} onClick={settle}>提交</button>
        </div>
    </div>
)

export default index
