import {useEffect} from 'react';
import Navbar from './Navbar';
import { cocktailDBStyles } from '../../utils/utils';
import classes from './CocktailDB.module.css';

const CocktailDB = ({children}) => {
	useEffect(() => {
	    cocktailDBStyles();	  
	}, []);

	return (
		<div className={classes.cocktailDB}>
			<Navbar/>
			{children}
		</div>
	);
}

export default CocktailDB;
