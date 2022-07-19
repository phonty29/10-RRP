import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import GroceryItem from './GroceryItem';
import {clearFirebaseItems, fetchFirebaseItems} from '../../utils/utils';
import classes from './GroceryBud.module.css';

const GroceryContainer = ({setAlertVisibility}) => {
	const dispatch = useDispatch();
	const buds = useSelector(state => state.groceryBud.buds);
	useEffect(() => {
		dispatch(fetchFirebaseItems());
	}, []);
	const clear = async () => {
		await clearFirebaseItems();
		await dispatch(fetchFirebaseItems("empty list", classes.alertDanger));
		setAlertVisibility(true);
	};

	return (
		<div className={classes.groceryContainer}>
			<div className={classes.groceryList}>
				{buds.length!=0 && buds.map((bud, index, array) => <GroceryItem key={index} index={index} setAlertVisibility={setAlertVisibility} item={bud.item}/>)}
			</div>
			{buds.length!=0 && <button className={classes.clearBtn} onClick={() => {clear()}}>clear items</button>}
		</div>
	);
}

export default GroceryContainer;