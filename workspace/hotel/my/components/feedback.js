import React from 'react';
import CommonHeader from '../../../common/components/header/';

const index = ({editFeedback,saveFeedback,feedback}) => (
    <div>
        <CommonHeader
            value = '留言反馈'
            bgcolor = {THEME_COLOR}
            back = {true}
            pathname = '/my'
        />
        <div className="weui-cells__title">您的建议或意见是我们前进的动力</div>
        <div className="weui-cells weui-cells_form">
            <div className="weui-cell">
                <div className="weui-cell__bd">
                    <div>
                        <textarea value={feedback} onChange={(e) => {editFeedback(e.target.value)}} className="weui-textarea" maxLength="200" placeholder="请输入建议或意见" rows="3">{feedback}</textarea>
                    </div>
                </div>
            </div>
        </div>
        <div style={{padding:'15px'}}>
            <button onClick={saveFeedback} style={{background:THEME_COLOR}} className="weui-btn weui-btn_primary">提交</button>
        </div>
    </div>
)

export default index
