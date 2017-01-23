import * as types from '../constants/ActionTypes';

const initialState = {
    products:[],
    editId:[],
    chooseId:[],
    chooseNum:0,
    totalFee:0,
    chooseAll:false,
};
//计算总价
const totalFee = (state) =>{
    let choose_id_ar = state.chooseId;
    let products = state.products;
    let totalFee = 0;
    choose_id_ar.map(function(index) {
        totalFee += products[index]['goods_price'] * products[index]['number'];
    })
    state.totalFee = totalFee;
    chooseNum(state);
}
//计算选中个数
const chooseNum = (state) =>{
    let choose_id_ar = state.chooseId;
    let chooseNum = 0;
    choose_id_ar.map(function(index,elem) {
        chooseNum ++;
    })
    state.chooseNum = chooseNum;
}

const carts = (state = initialState, action) => {
    const products = state.products;
    const chooseId_arr = state.chooseId;
    switch(action.type){
        case types.ALL_CARTS_PRODUCTS://初始化
            let cart = [];
            action.products.map(function(elem, index) {
              cart[elem.id] = elem
            })
            state.products = cart;
            return {
              ...state,
            }
        case types.EDIT_CART://点击编辑按钮
            const {cartId} = action;
            let editId = state.editId
            if(editId.includes(cartId)){
              let length = editId.length;
              let index = editId.indexOf(cartId);
              editId.splice(index,1);
              state.editId = [...editId,editId];
            }else{
              state.editId = [...editId,cartId];
              state.editId = Array.from(new Set(state.editId));
            }
            // return Object.assign({}, state);
            return {
              ...state
            }
        case types.CHOOSE_CART://单选
            const {chooseId} = action;
            const goods_price = products[chooseId]['goods_price'];
            if(chooseId_arr.includes(chooseId)){
              let length = chooseId_arr.length;
              let index = chooseId_arr.indexOf(chooseId);
              chooseId_arr.splice(index,1);
              state.chooseId = [...chooseId_arr,...chooseId_arr];
              state.chooseId = Array.from(new Set(state.chooseId));
            }else{
              state.chooseId = [...chooseId_arr,chooseId];
              state.chooseId = Array.from(new Set(state.chooseId));
            }
            totalFee(state);
            return {
              ...state
            }
        case types.CHOOSE_ALL://全选
            let choose_id = [];
            if(!state.chooseAll){
              for(let i in products){
                choose_id.push(i);
              }
              state.chooseId = choose_id;
            }else{
              state.chooseId = [];
            }
            state.chooseAll = !state.chooseAll;
            totalFee(state);
            return {
              ...state
            }
        case types.ADD_CART_PRODUCT://增加购物车商品数量
            state.products[action.cartId].number +=1;
            totalFee(state);
            return{
              ...state,
            }
        case types.DEL_CART_PRODUCT://减少购物车商品数量
            if(state.products[action.cartId].number > 1){
              state.products[action.cartId].number -=1;
              totalFee(state);
            }
            return{
              ...state,
            }
        case types.GET_CART_INFO://结算页面
            console.log(action.carts)
        default:
          return state;
    }
}
export default carts;

