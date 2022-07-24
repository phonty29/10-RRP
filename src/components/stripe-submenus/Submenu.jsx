import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {getGridClassName, getIcon} from '../../utils/utils';
import classes from './StripeSubmenus.module.css';

const Submenu = () => {
	const {sublink, visibility, coordinates} = useSelector(state => state.stripeSubmenu.submenu);
	const gridClassName = getGridClassName(sublink, classes);

	return (
		<aside className={`${classes.submenu} ${visibility}`} style={coordinates}>
			<section>
				<h4>{sublink.page}</h4>
				<div className={`${classes.submenuCenter} ${gridClassName}`}>
					{sublink.links.map((link, index, array) => <a href={link.url} key={index}>{getIcon(link.icon)} {link.label}</a>)}
				</div>
			</section>
		</aside>
	);
}

export default Submenu;