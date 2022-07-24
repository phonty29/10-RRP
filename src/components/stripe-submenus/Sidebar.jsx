import {useDispatch, useSelector} from 'react-redux';
import {FaTimes} from 'react-icons/fa';
import {toggleSidebar} from '../../slices/slices';
import SidebarLink from './SidebarLink';
import {sublinks} from '../../utils/utils';
import classes from './StripeSubmenus.module.css';

const Sidebar = () => {
	const dispatch = useDispatch();
	const sidebar = useSelector(state => state.stripeSubmenu.sidebar);

	const closeSidebar = () => {
		dispatch(toggleSidebar({command: ""}));
	};

	return (
		<div className={`${classes.sidebarWrapper} ${sidebar}`}>
			<aside className={classes.sidebar}>
				<button className={classes.closeBtn} onClick={closeSidebar}>
					<FaTimes/>
				</button>
				<div className={classes.sidebarLinks}>
					{sublinks.map((sublink, index, array) => <SidebarLink key={index} props={sublink}/>)}
				</div>
			</aside>
		</div>
	);
}

export default Sidebar;