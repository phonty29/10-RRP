import GroceryBtnContainer from './GroceryBtnContainer';
import classes from './GroceryBud.module.css';

const GroceryItem = ({index, item}) => {
	return (
		<article className={classes.groceryItem}>
			<p className={classes.title}>{item}</p>
			<GroceryBtnContainer index={index}/>
		</article>
	);
}

export default GroceryItem;