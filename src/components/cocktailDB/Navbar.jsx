import classes from './CocktailDB.module.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/cocktailDB/logo.svg';

const Navbar = () => {

	return (
		<nav className={classes.navbar}>
			<div className={classes.navCenter}>
				<Link to='/cocktailDB'><img src={logo} alt="cocktailDB logo"/></Link>
				<ul className={classes.navLinks}>
					<li><Link to='/cocktailDB'>home</Link></li>
					<li><Link to='/cocktailDB/about'>about</Link></li>
				</ul>
			</div> 
		</nav>
	);
}

export default Navbar; 