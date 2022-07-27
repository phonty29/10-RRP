import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import classes from './CocktailDB.module.css';
import CocktailDBItem from './CocktailDBItem';
import Loading from './Loading';

const CocktailDBGrid = () => {
	const {cocktails, message} = useSelector(state => state.cocktailDB);
	return (
		message ? <h2 className={classes.sectionTitle}>{message}</h2> :
		(cocktails.length ?
		<section className={classes.section}>
			<h2 className={classes.sectionTitle}>cocktails</h2>
			<div className={classes.cocktailsCenter}>
				{cocktails.map((cocktail, index, array) => <CocktailDBItem key={cocktail.idDrink} props={cocktail}/>)}
			</div>
		</section> : <Loading/>
		)
	);
}

export default CocktailDBGrid;