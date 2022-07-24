import classes from './StripeSubmenus.module.css';
import {getIcon} from '../../utils/utils';

const SidebarLink = ({props}) => {
	return (
		<article>
			<h4>{props.page}</h4>
			<div className={classes.sidebarSublinks}>
				{props.links.map((link, index, array) => <a href={link.url} key={index}>{getIcon(link.icon)} {link.label}</a>)}
			</div>
		</article>
	);
}

export default SidebarLink;