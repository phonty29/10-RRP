import {useDispatch} from 'react-redux';
import {toggleSubmenu} from '../../slices/slices';
import {sublinks} from '../../utils/utils'
import classes from './StripeSubmenus.module.css';

const NavLinks = () => {
	const dispatch = useDispatch();
	const openSubmenu = (event, sublink) => {
		const btnArea = event.target.getBoundingClientRect();
		dispatch(toggleSubmenu({sublink: sublink, visibility: classes.show, coordinates: {left: `${(btnArea.left + btnArea.right)/2}px`, top: `${btnArea.bottom - 3}px`}}));
	};


	return (
		<ul className={classes.navLinks}>
			{sublinks.map((sublink, index, array) => <li key={index} onMouseOver={(e) => openSubmenu(e, sublink)}><button className={classes.linkBtn}>{sublink.page}</button></li>)}
		</ul>
	);
}

export default NavLinks;