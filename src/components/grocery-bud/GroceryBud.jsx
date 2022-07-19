import {useState, useEffect} from 'react';
import GroceryForm from './GroceryForm';
import GroceryContainer from './GroceryContainer';
import classes from './GroceryBud.module.css';
import { bodyStyle } from '../../utils/utils';

const GroceryBud = () => {
	const [showAlert, setAlertVisibility] = useState(false);
	useEffect(() => {
	    bodyStyle.backgroundColor = '#f1f5f8';
	    bodyStyle.color = '#102a42';    
	}, []);

	return (
		<section className={classes.sectionCenter}>
			<GroceryForm showAlert={showAlert} setAlertVisibility={setAlertVisibility}/>
			<GroceryContainer setAlertVisibility={setAlertVisibility}/>
		</section>
	);
}

export default GroceryBud;