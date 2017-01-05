var React = require('react');
var StoreIndex = require('./index/index');
var Foot = require('./foot/index');
import { Link } from 'react-router';

var StoreApp = React.createClass({

	render:function(){
		return(
			<div>
				<StoreIndex/>
				<Foot/>
			</div>
		)
	}
})

module.exports = StoreApp;