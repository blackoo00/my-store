import React from 'react';

export default React.createClass({
	render(){
		var my_qrcode = this.props.location.query.info;
		console.log(my_qrcode);
		return(
			<div>
				<img src={my_qrcode}/>
			</div>
		)
	}
})