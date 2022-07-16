import {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {getBoremIpsumText} from '../../utils/utils';
import classes from './TextGenerator.module.css';

const TextForm = () => {
	const dispatch = useDispatch();
	const inputRef = useRef(null);

	return (
		<form className={classes.loremForm}>
			<label htmlFor="amount" className={classes.label}>paragraphs:</label>
			<input ref={inputRef} className={classes.input} type="number" name="amount" id="amount" defaultValue={0}/> 
			<button className={classes.btn} onClick={(event) => {event.preventDefault(); dispatch(getBoremIpsumText(inputRef.current.value));}}>generate</button>
		</form>		
	)
};

export default TextForm;