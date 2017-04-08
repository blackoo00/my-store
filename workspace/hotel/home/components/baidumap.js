import React from 'react';

class index extends React.Component{
    componentDidMount(){
        // 百度地图API功能
        var map = new BMap.Map("baidumap"); // 创建Map实例
        map.centerAndZoom(new BMap.Point(121.436517, 28.653013), 19); // 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
        map.setCurrentCity("台州"); // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    }
    render(){
        return(
            <div id="baidumap" style={{height:'150px'}}>

            </div>
        )
    }
}

export default index
