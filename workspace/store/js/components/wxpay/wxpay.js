import React from 'react';

export default React.createClass({
	jsApiCall()
    {
    	$.getJSON(STORESERVER+'wxPay', function(json, textStatus) {
    			var b=json.data;
    	});
        // var b={wghd:$parameters};
        WeixinJSBridge.invoke(
                'getBrandWCPayRequest',
                {
                     "appId":b.appId,
                     "nonceStr":b.nonceStr,
                     "package":b.package,
                     "paySign":b.paySign,
                     "signType":b.signType,
                     "timeStamp":b.timeStamp
                },
                function(res){
                    if(res.err_msg == 'get_brand_wcpay_request:ok'){
                        alert('恭喜您，支付成功!更新可能会有5～10秒延迟，请稍后查看电子票!');
                        window.location.href = '<?php echo ROOT ?>/index.php?r=index/index&c=1';     //登录成功 跳转到主要页面

                    }else{
                         alert(JSON.stringify(res));
                    }
                }
        );
    },
    callpay(){
        if (typeof WeixinJSBridge == "undefined"){
            if( document.addEventListener ){
                document.addEventListener('WeixinJSBridgeReady', this.jsApiCall,false);
            }else if (document.attachEvent){
                document.attachEvent('WeixinJSBridgeReady', this.jsApiCall);
                document.attachEvent('onWeixinJSBridgeReady', this.jsApiCall);
            }
        }else{
            this.jsApiCall();
        }
    },
	render(){
		var order_sn = this.props.location.query.order_sn;
		var user_name = this.props.location.query.user_name;
		var total_fee = this.props.location.query.total_fee;
		return(
			<div className="cashierView">
				<div className="header">
					<span className="back"></span>
					<span>付款详细</span>
				</div>
				<div className="weui_cells weui_cells_access">
				  <a className="weui_cell" href="javascript:;">
				    <div className="weui_cell_bd weui_cell_primary">
				      <p>订单号</p>
				    </div>
				    <div className="weui_cell_ft">{order_sn}</div>
				  </a>
				  <a className="weui_cell" href="javascript:;">
				    <div className="weui_cell_bd weui_cell_primary">
				      <p>账号</p>
				    </div>
				    <div className="weui_cell_ft">{user_name}</div>
				  </a>
				  <a className="weui_cell" href="javascript:;">
				    <div className="weui_cell_bd weui_cell_primary">
				      <p>付款方式</p>
				    </div>
				    <div className="weui_cell_ft">微信支付</div>
				  </a>
				  <a className="weui_cell" href="javascript:;">
				    <div className="weui_cell_bd weui_cell_primary">
				      <p>需付款</p>
				    </div>
				    <div className="weui_cell_ft">{total_fee}元</div>
				  </a>
				</div>
				<div className="am-section">
				  <button type="submit" className="am-button am-button-blue" onClick={this.callpay}>确认付款</button>
				</div>
			</div>
		)
	}
})