import meal from '../api/meal';
import * as types from '../contants/ActionTypes';

//获取扫一扫参数
const getScanConfigDip = (data) => ({
    type:types.GET_SCAN_CONFIG,
    data:data
})

export const getScanConfig = () => dispatch => {
    meal.getScanConfig(data => {
        dispatch(getScanConfigDip(data))
    })
}

const wxConfig = (config) => {
    wx.config({
        debug: config.debug, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: config.appId, // 必填，公众号的唯一标识
        timestamp: config.timestamp, // 必填，生成签名的时间戳
        nonceStr: config.nonceStr, // 必填，生成签名的随机串
        signature: config.signature,// 必填，签名，见附录1
        jsApiList: config.jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
}

//扫码
export const wxScan = () => dispatch => {
    meal.getScanConfig(config => {
        wxConfig(config);
        wx.ready(function(){
            wx.scanQRCode();
        });
    })
}

//隐藏分享按钮
export const wxHide = () => dispatch =>{
    meal.getScanConfig(config => {
        wxConfig(config);
        wx.ready(function(){
            wx.hideOptionMenu();
        })
    })
}

//分享
export const wxShare = () => dispatch => {
    meal.getScanConfig(config => {
        wxConfig(config);
        wx.ready(function(){
            wx.showOptionMenu();
            //分享到朋友圈
            wx.onMenuShareTimeline({
                title: config.defaultShareData.title, // 分享标题
                link: config.defaultShareData.link, // 分享链接
                imgUrl: config.defaultShareData.imgUrl, // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
            //分享给朋友
            wx.onMenuShareAppMessage({
                title: config.defaultShareData.title, // 分享标题
                desc: config.defaultShareData.desc, // 分享描述
                link: config.defaultShareData.link, // 分享链接
                imgUrl: config.defaultShareData.imgUrl, // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
            //分享到QQ
            wx.onMenuShareQQ({
                title: config.defaultShareData.title, // 分享标题
                desc: config.defaultShareData.desc, // 分享描述
                link: config.defaultShareData.link, // 分享链接
                imgUrl: '', // 分享图标
                success: function () {
                   // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                   // 用户取消分享后执行的回调函数
                }
            });
            //分享到腾讯微博
            wx.onMenuShareWeibo({
                title: config.defaultShareData.title, // 分享标题
                desc: config.defaultShareData.desc, // 分享描述
                link: config.defaultShareData.link, // 分享链接
                imgUrl: '', // 分享图标
                success: function () {
                   // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
            //分享到QQ空间
            wx.onMenuShareQZone({
                title: config.defaultShareData.title, // 分享标题
                desc: config.defaultShareData.desc, // 分享描述
                link: config.defaultShareData.link, // 分享链接
                imgUrl: '', // 分享图标
                success: function () {
                   // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
        });
    })
}
