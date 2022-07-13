import {useDispatch} from 'react-redux';
import classes from './Menu.module.css';
import {showAllMenu, breakfastRemained, lunchRemained, shakesRemained} from '../../actions/actions';
import {MENU_ITEMS} from '../../utils/utils';

const ButtonContainer = () => {
	const dispatch = useDispatch();
	const filterAction = (action) => {
		dispatch(action(MENU_ITEMS));
	};
	
	return (
		<div className={classes.btnContainer}>
			<button type="button" className={classes.filterBtn} onClick={() => {filterAction(showAllMenu)}}>all</button>
			<button type="button" className={classes.filterBtn} onClick={() => {filterAction(breakfastRemained)}}>breakfast</button>
			<button type="button" className={classes.filterBtn} onClick={() => {filterAction(lunchRemained)}}>lunch</button>
			<button type="button" className={classes.filterBtn} onClick={() => {filterAction(shakesRemained)}}>shakes</button>
		</div>
	);
}

export default ButtonContainer;