import {useRef, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import GroceryAlert from './GroceryAlert';
import {postFirebaseItem, editFirebaseItem, fetchFirebaseItems} from '../../utils/utils';
import classes from './GroceryBud.module.css';

const GroceryForm = ({showAlert, setAlertVisibility}) => {
	const [value, setValue] = useState("");
	const dispatch = useDispatch();
	const {buds, buttonState, itemIndex, itemValue} = useSelector(state => state.groceryBud);
	useEffect(() => {setValue(itemValue)}, [itemValue]);
	const buttonAction = async () => {
		if (buttonState == 'submit') {await postFirebaseItem(value); await dispatch(fetchFirebaseItems("Item added to the list", classes.alertSuccess)); setAlertVisibility(true);}
		else if (buttonState == 'edit') {await editFirebaseItem(buds, itemIndex, value); await dispatch(fetchFirebaseItems("Value changed", classes.alertSuccess)); setAlertVisibility(true);}
		setValue("");
	};

	return (
		<form className={classes.groceryForm}>
			{showAlert && <GroceryAlert setVisibility={setAlertVisibility}/>}
			<h3>grocery bud</h3>
			<div className={classes.formControl}>
				<input type="text" className={classes.grocery} value={value} placeholder="e.g.eggs" onChange={(event) => {setValue(event.target.value)}}/>
				<button type="button" className={classes.submitBtn} onClick={() => {buttonAction()}}>{`${buttonState}`}</button>
			</div>	
		</form>
	);
}

export default GroceryForm;

