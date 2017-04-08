const SERVER="http://127.0.0.1/wg_hunqing/index.php/Wap/Hotel/";
// const SERVER="http://1979.tzwg.net/index.php?g=Wap&m=Meal&a=";
// const SERVER="http://192.168.1.119/wg_meal/index.php?g=Wap&m=Meal&a=";
const initialArr = {
    url:'',
    data:{},
    async:false,
    type:'get',
    server:SERVER,
}

const ajaxData = (arr = initialArr,callback = () => {}) => {
    var ajax_data;
    arr = {...initialArr,...arr}
    $.ajax({
        url:arr.server + arr.url,
        data:arr.data,
        async:arr.async,
        type:arr.type,
        dataType:'json',
        success:function(data){
            ajax_data = data;
        }
    });
    return ajax_data;
}

const TIMEOUT = 100


export default {
    //首页初始化
    indexInit:(cb) => {
        let _data = ajaxData({
            url:'index',
        })
        cb(_data.data);
    }
}
