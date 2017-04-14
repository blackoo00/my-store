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
    //获取扫一扫参数
    getScanConfig:(cb) => {
        let _data = ajaxData({
            url:'scanConfig',
            data:{forwardurl:String(location.href)}
        })
        cb(_data.data);
    },
}
