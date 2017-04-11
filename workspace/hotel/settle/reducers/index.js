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
                roomnums:[1,2,3],
                keeptimes:['18:00','19:00'],
            }
        default:
            return state
    }
}

export default index
