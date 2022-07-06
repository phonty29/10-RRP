import {useDispatch, useSelector} from "react-redux";
import {switchRoute} from '../actions/actions';
import routes from '../routes/routes';

const Dropdown = () => {
	const dispatch = useDispatch();
	const name = useSelector(state => state.route.name);	

	return (
		<div className="dropdown">
		  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">{name}</button>
		  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
		    {
		    	routes.map((route, index, array) => {
		    		return <li key={index}><button className="dropdown-item" type="button" onClick={() => {dispatch(switchRoute(route))}}>{route.name}</button></li>;
		    	})
		    }
		  </ul>
		</div>
	);
}

export default Dropdown;