import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useParams} from 'react-router-dom';
import CocktailDB from './CocktailDB';
import { getCocktailsDB_byId, getIngredients } from '../../utils/utils';
import classes from './CocktailDB.module.css';

const SingleCocktail = () => {
	const {idDrink} = useParams();
	const dispatch = useDispatch();
	const cocktail = useSelector(state => state.cocktailDB.singleCocktail);
	useEffect(() => {
	    dispatch(getCocktailsDB_byId(idDrink));
	}, []);

	return (
		<CocktailDB>
			<section className={`${classes.section} ${classes.cocktailSection}`}>
				<Link to='/cocktailDB' className={`${classes.btn} ${classes.btnPrimary}`}>back home</Link>
				<h2 className={classes.sectionTitle}>{cocktail.strDrink}</h2>
				<div className={classes.drink}>
					<img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
					<div className={classes.drinkInfo}>
						<p><span className={classes.drinkData}>name :</span> {cocktail.strDrink}</p>
						<p><span className={classes.drinkData}>category :</span> {cocktail.strCategory}</p>
						<p><span className={classes.drinkData}>info :</span> {cocktail.strAlcoholic}</p>
						<p><span className={classes.drinkData}>glass :</span> {cocktail.strGlass}</p>
						<p><span className={classes.drinkData}>instructons :</span>{cocktail.strInstructions}</p>
						<p><span className={classes.drinkData}>ingredients :</span>{getIngredients(cocktail).map((ingredient, index, array) => <span key={index}>{ingredient}</span>)}</p>
					</div>
				</div>
			</section>
		</CocktailDB>
	);
}

export default SingleCocktail;
