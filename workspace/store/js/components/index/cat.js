var React = require('react');
import CSSModules from 'react-css-modules';
import styles from './style.css';

const Cat = ({CatList}) => (
	<div styleName="catWrap">
		{CatList.map(item => (
			<div key={item.id} styleName="catItem">
				<img src={item.icon}/>
				<p styleName="catName">{item.name}</p>
			</div>
		))}
	</div>
)

export default CSSModules(Cat, styles)