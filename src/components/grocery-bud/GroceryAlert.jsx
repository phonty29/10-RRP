import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import classes from './GroceryBud.module.css';

const GroceryAlert = ({setVisibility}) => {
	const {alertMessage, alertType} = useSelector(state => state.groceryBud);
	useEffect(() => {
	    const timeout = setTimeout(() => {
	      setVisibility(false);
	    }, 1500);
	    return () => clearTimeout(timeout);		
	}, []);

	return (
		<p className={`${classes.alert} ${alertType}`}>{alertMessage}</p>
	);
}

export default GroceryAlert;