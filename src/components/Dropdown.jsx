import {useDispatch, useSelector} from "react-redux";
import {switchRoute} from '../actions/actions';
import routes, {cocktailDBRoutes} from '../routes/routes';
import classes from './Entry.module.css';

const Dropdown = () => {
	const dispatch = useDispatch();
	const name = useSelector(state => state.route.name);	

	return (
		<div className={classes.dropdown}>
		  <button className={classes.dropbtn} type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">{name}</button>
		  <ul className={classes.dropdownContent} aria-labelledby="dropdownMenu2">
		    {
		    	routes.map((route, index, array) => {
		    		return <li key={index}><button className={classes.dropdownItem} type="button" onClick={() => {dispatch(switchRoute({name: route.name, path: route.path}))}}>{route.name}</button></li>;
		    	})
		    }
		    <li><button className={classes.dropdownItem} type="button" onClick={() => {dispatch(switchRoute({name: cocktailDBRoutes[0].name, path: cocktailDBRoutes[0].path}))}}>{cocktailDBRoutes[0].name}</button></li>	    
		  </ul>
		</div>
	);
}

export default Dropdown;