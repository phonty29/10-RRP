import {useDispatch} from 'react-redux';
import {toggleSubmenu} from '../../slices/slices';
import {sublinks} from '../../utils/utils';
import classes from './StripeSubmenus.module.css';
import NavHeader from './NavHeader';
import NavLinks from './NavLinks';

const Navbar = () => {
	const dispatch = useDispatch();
	const closeSubmenu = (event) => {
		if (!event.target.classList.contains(classes.linkBtn))
			dispatch(toggleSubmenu({sublink: sublinks[0], visibility: "", coordinates: {}}));
	};

	return (
		<nav className={classes.nav} onMouseOver={(e) => closeSubmenu(e)}>
			<div className={classes.navCenter}>
				<NavHeader/>
				<NavLinks/>
				<button className={`${classes.btn} ${classes.signinBtn}`}>Sign in</button>
			</div>
		</nav>
	);
}

export default Navbar;