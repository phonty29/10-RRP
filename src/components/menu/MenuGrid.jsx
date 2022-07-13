import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MenuItem from './MenuItem';
import {showAllMenu} from '../../actions/actions';
import {MENU_ITEMS} from '../../utils/utils';

const MenuGrid = ({className}) => {
	const dispatch = useDispatch();
	const menuItems = useSelector(state => state.menu.menu);
	useEffect(() => {
		dispatch(showAllMenu(MENU_ITEMS));
	}, []);

	return (
		<div className={className}>
			{menuItems.map((menuItem, index, array) => <MenuItem item={menuItem} key={menuItem.id}/>)}
		</div>	
	);
}

export default MenuGrid;