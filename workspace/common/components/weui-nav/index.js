import React from 'react';

const WeuiNav = ({data,active,active_color,choose}) => (
    <div className="weui_navbar" style={{position:'fixed',top:0}}>
        {data.map((item,index) => (
            <div onClick={() => {choose(index)}} style={{background:index == active ? active_color: '',color:index == active ? '#fff': ''}} key = {'weui-nav' + index} className="weui_navbar_item">
                {item}
            </div>
        ))}
    </div>
)

export default WeuiNav
