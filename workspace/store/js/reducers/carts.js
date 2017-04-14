import * as types from '../constants/ActionTypes';

const initialState = {
    products:[],
    editId:[],//点击编辑商品ID
    chooseId:[],//选中商品ID
    chooseNum:0,//选中商品数量
    totalFee:0,//选中商品总额
    chooseAll:false,//是否全选
    totalNum:0,//购物车选中商品总数
    remark:'',//购物留言
};

//计算总价
const totalFee = (products) =>{
  let total_fee = 0;
  for(let i in products){
    if(products[i].choose == 1){
      total_fee += products[i].goods_price*products[i].number;
    }
  }
  return total_fee;
}

//计算商品总数
const totalNum = (products) =>{
  let total_num = 0;
  for(let i in products){
    if(products[i].choose == 1){
      total_num += products[i].number;
    }
  }
  return total_num;
}

//计算选中个数
const chooseNum = (products) =>{
  let choose_num = 0;
  for(let i in products){
    if(products[i].choose == 1){
      choose_num += 1;
    }
  }
  return choose_num;
}

//删除数组指定元素
const arrRemove = (arr,val) =>{
  let index = arr.indexOf(val);
  arr.splice(index,1);
  return arr;
}

const carts = (state = initialState, action) => {
    const products = state.products;
    const chooseId_arr = state.chooseId;
    switch(action.type){
        case types.ALL_CARTS_PRODUCTS://初始化
            return {
              ...state,
              products:action.products.reduce((obj, product) => {
                  obj[product.id] = product
                  return obj
              },[]),
              totalFee:totalFee(action.products),
              totalNum:totalNum(action.products),
            }
        case types.EDIT_CART://点击编辑按钮
            let {cartId} = action;
            let state_editId = state.editId;
            return {
              ...state,
              editId:state_editId.includes(cartId) ? arrRemove(state_editId,cartId) : Array.from(new Set([
                  ...state_editId,
                  cartId
                ])),
            }
        case types.CHOOSE_CART://单选
            const {chooseId} = action;
            let state_chooseId = state.chooseId;
            state.products[chooseId].choose = state_chooseId.includes(chooseId) ? 0 : 1;
            return {
              ...state,
              chooseId:state_chooseId.includes(chooseId) ? arrRemove(state_chooseId,chooseId) : Array.from(new Set([
                  ...state_chooseId,
                  chooseId
                ])),
              totalFee:totalFee(state.products),
              totalNum:totalNum(state.products),
              chooseNum:chooseNum(state.products)
            }
        case types.CHOOSE_ALL://全选
            let choose_id = [];
            for(let i in products){
                choose_id.push(i);
                state.chooseAll ? products[i].choose = 0 : products[i].choose = 1;
            }
            return {
              ...state,
              chooseAll:!state.chooseAll,
              chooseId:state.chooseAll ? [] : choose_id,
              totalFee:totalFee(state.products),
              totalNum:totalNum(state.products),
              chooseNum:chooseNum(state.products)
            }
        case types.ADD_CART_PRODUCT://增加购物车商品数量
            state.products[action.cartId].number +=1;
            return{
              ...state,
              totalFee:totalFee(state.products),
              totalNum:totalNum(state.products),
              chooseNum:chooseNum(state.products)
            }
        case types.DEL_CART_PRODUCT://减少购物车商品数量
            if(state.products[action.cartId].number > 1){
              state.products[action.cartId].number -=1;
            }
            return{
              ...state,
              totalFee:totalFee(state.products),
              totalNum:totalNum(state.products),
              chooseNum:chooseNum(state.products)
            }
        case types.REMOVE_CART_BY_ID:
            state.products[action.cartId].delete = 1;
            return{
              ...state
            }
        case types.ASSIGN_SETTLE_CHOOSEIDS://结算页面
            state.products.map((item,key)=>{
              action.cartIds.includes(item.id) ? state.products[key].choose = 1 : state.products[key].choose = 0;
            })
            return {...state};
        default:
          return state;
    }
}
export default carts;

