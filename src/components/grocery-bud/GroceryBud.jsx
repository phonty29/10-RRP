import {useState, useEffect} from 'react';
import GroceryForm from './GroceryForm';
import GroceryBudProvider from './GroceryBudProvider';
import GroceryContainer from './GroceryContainer';
import classes from './GroceryBud.module.css';
import { bodyStyle } from '../../utils/utils';

const GroceryBud = () => {
	useEffect(() => {
	    bodyStyle.backgroundColor = '#f1f5f8';
	    bodyStyle.color = '#102a42';    
	}, []);

	return (
		<section className={classes.sectionCenter}>
			<GroceryBudProvider>
				<GroceryForm/>
				<GroceryContainer/>
			</GroceryBudProvider>
		</section>
	);
}

export default GroceryBud;