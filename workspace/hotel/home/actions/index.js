import * as types from '../../contants/ActionTypes';
import hotel from '../../api/hotel';
import {hashHistory} from 'react-router';

//首页内容初始化
const indexInitDip = (data) => ({
    type:types.INDEX_INIT,
    data:data
})

export const indexInit = () => dispatch => {
    hotel.indexInit(data => {
        dispatch(indexInitDip(data))
    })
}
//选择入驻时间
export const inTime = (intime,values) =>({
    type:types.GET_INTIME,
    value:intime,
    values:values
})
//选择退房时间
export const outTime = (outtime,values) => ({
    type:types.GET_OUTTIME,
    value:outtime,
    values:values
})
//预约房间
const orderRoomDip = (pid,price,id) => ({
    type:types.ORDER_ROOM,
    pid:pid,
    price:price,
    id:id
})

export const orderRoom = (pid,price,intime,outtime,livedays) => dispatch => {
    let data = {
        'price':price,
        'pid':pid,
        'intime':intime,
        'outtime':outtime,
        'livedays':livedays
    }
    hotel.settle(data => {
        if(data.status == 1){
            dispatch(orderRoomDip(pid,price,data.data))
            hashHistory.push({pathname:'/settle'})
        }else{
            $.alert('预约失败');
        }
    },data)
}
