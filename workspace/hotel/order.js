import * as types from './contants/ActionTypes';
const initialState = {
    id:0,
    intime:'',
    intimevalue:'',
    outtime:'',
    outtimevalue:'',
    livedays:0,
    total_fee:0,
    price:0,
    total:0,
    keeptime:'',
    name:'',
    tel:'',
    pid:0,
}

const liveDays = (intime,outtime) => {
    if(intime && outtime){
        let time = parseInt(outtime) - parseInt(intime);
        return time/1000/86400;
    }else{
        return 0;
    }
}

const order = (state = initialState, action) => {
    switch(action.type){
        //首页初始化
        case types.INDEX_INIT:
            return {
                ...state,
                ...initialState
            }
        //结算提交
        case types.SETTLE:
            return {
                ...state,
                keeptime:state.keeptime == '' ? action.defaultkeeptime: state.keeptime,
                total:state.total == '' ? action.defaulttotal: state.total
            }
        //支付中心初始
        case types.PAY_INIT:
            return {
                ...state,
                ...action.data
            }
        //结算页初始
        case types.SETTLE_INIT:
            return {
                ...state,
                ...action.data,
            }
        //首页点击预约
        case types.ORDER_ROOM:
            return {
                ...state,
                pid:action.pid,
                total_fee:action.price,
                price:action.price,
                id:action.id,
                total:0,
            }
        //入驻人姓名
        case types.SIGN_IN_NAME:
            return {
                ...state,
                name:action.name
            }
        //入驻人电话
        case types.SIGN_IN_TEL:
            return {
                ...state,
                tel:action.tel
            }
        //选择保留时间
        case types.CHOOSE_KEEPTIME:
            return {
                ...state,
                keeptime:action.time
            }
        //选择房间数量
        case types.CHOOSE_ROOMNUM:
            return {
                ...state,
                total:action.num,
                total_fee:action.num * state.price
            }
        //结算初始化
        case types.SETTLE_INIT:
            return {
                ...state,
                intimevalue:action.data.intimevalue,
                outtimevalue:action.data.outtimevalue,
                livedays:action.data.livedays,
            }
        //选择入驻时间
        case types.GET_INTIME:
            return {
                ...state,
                intime:action.value,
                intimevalue:action.values,
                livedays:liveDays(action.value,state.outtime)
            }
        //选择离店时间
        case types.GET_OUTTIME:
            return {
                ...state,
                outtime:action.value,
                outtimevalue:action.values,
                livedays:liveDays(state.intime,action.value)
            }
        default:
            return state
    }
}

export default order
