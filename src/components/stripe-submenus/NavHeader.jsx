import {useDispatch} from 'react-redux';
import {toggleSidebar} from '../../slices/slices';
import {FaBars} from 'react-icons/fa';
import classes from './StripeSubmenus.module.css';
import stripeLogo from '../../assets/images/stripe-submenus/logo.svg';

const NavHeader = () => {
	const dispatch = useDispatch();
	const openSidebar = () => {
		dispatch(toggleSidebar({command: classes.show}));
	};

	return (
		<div className={classes.navHeader}>
			<img src={stripeLogo} alt="stripe logo" className={classes.navLogo}/>
			<button className={`${classes.btn} ${classes.toggleBtn}`} onClick={openSidebar}>
				<FaBars />
			</button>
		</div>
	);
}

export default NavHeader;