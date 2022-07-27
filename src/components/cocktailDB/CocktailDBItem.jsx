import classes from './CocktailDB.module.css';
import {Link} from 'react-router-dom';

const CocktailDBItem = ({props}) => {
	return (
		<article className={classes.cocktail}>
			<div className={classes.imgContainer}>
				<img src={props.strDrinkThumb} alt={props.strDrink}/>
			</div>
			<div className={classes.cocktailFooter}>
				<h3>{props.strDrink}</h3>
				<h4>{props.strGlass}</h4>
				<p>{props.strAlcoholic}</p>
				<Link to={`/cocktailDB/single-cocktail/${props.idDrink}`} className={`${classes.btn} ${classes.btnPrimary} ${classes.btnDetails}`}>details</Link>
			</div>
		</article>
	);
}

export default CocktailDBItem;


