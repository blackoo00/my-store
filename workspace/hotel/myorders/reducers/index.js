import * as types from '../../contants/ActionTypes';

const initialState = {
    lived:0,
    list:[],
    showlist:[]
}

const myorders = (state = initialState, action) => {
    switch(action.type){
        case types.MYORDERS_LIST:
            return {
                ...state,
                list:action.data,
                showlist:action.data
            }
        case types.CHOOSE_LIVE_TYPE:
            let showlist = [];
            if(action.lived == 0){
                showlist = state.list
            }else{
                state.list.map((item,index) => {
                    if(item.lived == action.lived){
                        showlist.push(item);
                    }
                })
            }
            return {
                ...state,
                lived:action.lived,
                showlist:showlist
            }
        default:
            return state
    }
}

export default myorders
