import React from 'react';
import CommonHeader from '../../../common/components/header/';

const index = ({name,tel,editName,editTel,editMyInfo}) => (
    <div>
        <CommonHeader
            value = '个人信息'
            bgcolor = {THEME_COLOR}
            back = {true}
            pathname = '/my'
        />
        <div className="weui-cells weui-cells_form">
            <div className="weui-cell">
                <div className="weui-cell__hd">
                    <div>
                        <label className="weui-label">姓名</label>
                    </div>
                </div>
                <div className="weui-cell__bd">
                    <div>
                        <input type="tel" className="weui-input" value={name} onChange={(e) => {editName(e.target.value)}} placeholder="请输入姓名"/>
                    </div>
                </div>
            </div>
            <div className="weui-cell">
                <div className="weui-cell__hd">
                    <div>
                        <label className="weui-label">手机号码</label>
                    </div>
                </div>
                <div className="weui-cell__bd">
                    <div>
                        <input type="tel" className="weui-input" value={tel} onChange={(e) => {editTel(e.target.value)}} placeholder="请输入手机号码"/>
                    </div>
                </div>
            </div>
            <div style={{padding:'15px'}}>
                <button onClick={editMyInfo} style={{background:THEME_COLOR}} className="weui-btn weui-btn_primary">提交</button>
            </div>
        </div>
    </div>
)

export default index
