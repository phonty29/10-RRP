import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useGroceryBudContext} from './GroceryBudProvider';
import classes from './GroceryBud.module.css';

const GroceryAlert = () => {
	const {alertMessage, alertType} = useSelector(state => state.groceryBud);
	const {makeAlertHidden} = useGroceryBudContext();
	useEffect(() => {
	    const timeout = setTimeout(() => {
	      makeAlertHidden();
	    }, 1500);
	    return () => clearTimeout(timeout);		
	}, []);

	return (
		<p className={`${classes.alert} ${alertType}`}>{alertMessage}</p>
	);
}

export default GroceryAlert;