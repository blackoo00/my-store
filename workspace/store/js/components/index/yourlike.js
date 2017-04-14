var React = require('react');
import { Link,hashHistory } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './style.css';

const YourLike = ({ProList}) => (
	<div styleName="indexItem">
		<div>
			{ProList.map(item => (
				<Link key={item.id} to={{pathname:'/pdetail',query:{id:item.id}}}>
					<div styleName='indexProItem'>
						<img src={item.logo}/>
						<p styleName="indexProName">{item.name}</p>
						<p styleName="indexProPrice">￥{item.price}</p>
					</div>
				</Link>
			))}
		</div>
	</div>
)

export default CSSModules(YourLike, styles)