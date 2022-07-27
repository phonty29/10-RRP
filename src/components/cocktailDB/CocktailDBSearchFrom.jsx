import {useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import classes from './CocktailDB.module.css';
import {getCocktailsDB_byName, getCocktailsDB_byFirstLetter, getCocktailsDB_byId} from '../../utils/utils';

const CocktailDBSearchFrom = () => {
	const dispatch = useDispatch();
	const inputRef = useRef(null);
	useEffect(() => {
		inputRef.current.focus();
		dispatch(getCocktailsDB_byName());
	}, []);
	const searchCocktails = () => {
		const inputValue = inputRef.current.value;
		switch(inputValue.length) {
			case 0: dispatch(getCocktailsDB_byName(inputValue)); break;
			case 1: dispatch(getCocktailsDB_byFirstLetter(inputValue)); break;
			default: dispatch(getCocktailsDB_byName(inputValue));
		}
	};  

	return (
		<section className={`${classes.section} ${classes.search}`}>
			<form className={classes.searchForm} onSubmit={(event) => {event.preventDefault()}}>
				<div className={classes.formControl}>
					<label htmlFor="name">search your favorite cocktail</label>
					<input type="text" name="name" id="name" ref={inputRef} onChange={searchCocktails}/>
				</div>
			</form>
		</section>
	);
}

export default CocktailDBSearchFrom;