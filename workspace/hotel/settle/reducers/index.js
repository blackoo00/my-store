import * as types from '../../contants/ActionTypes';
const initialState = {
    roomnums:[],
    keeptimes:[],
}

const index = (state = initialState, action) => {
    switch(action.type){
        case types.SETTLE_INFO_INIT:
            return {
                ...state,
                roomnums:action.data['roomnums'],
                keeptimes:action.data['keeptimes'],
            }
        default:
            return state
    }
}

export default index
