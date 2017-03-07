import React from 'react';
import render from 'react-dom';
import {Link} from 'react-router';

class Container extends React.Component{
	render(){
		let {children} = this.props;
		return(
			<div>
				<div>
					<Link to='/'>Index</Link>&nbsp;
					<Link to='/example'>Example</Link>
				</div>
				{children}
			</div>
		)
	}
}

export default Container