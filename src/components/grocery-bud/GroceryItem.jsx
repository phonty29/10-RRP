import GroceryBtnContainer from './GroceryBtnContainer';
import classes from './GroceryBud.module.css';

const GroceryItem = ({index, setAlertVisibility, item}) => {
	return (
		<article className={classes.groceryItem}>
			<p className={classes.title}>{item}</p>
			<GroceryBtnContainer index={index} setAlertVisibility={setAlertVisibility}/>
		</article>
	);
}

export default GroceryItem;