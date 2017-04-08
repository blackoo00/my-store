import * as types from '../../contants/ActionTypes';

const intialState = {
    indexbans:[],
    indexprods:[]
}

const hotel = (state = intialState, action) => {
    switch(action.type){
        case types.INDEX_INIT:
            return {
                ...state,
                indexbans:action.data.bans,
                indexprods:action.data.prods
            }
        default:
            return state;
    }
}

export default hotel
