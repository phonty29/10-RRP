import classes from './Menu.module.css';

const MenuItem = ({item}) => {
	return (
		<article className={classes.menuItem}>
			<img src={item.img} alt={item.title} className={classes.photo}/>
			<div className={classes.itemInfo}>
				<header>
					<h4>{item.title}</h4>
					<h4 className={classes.price}>${item.price}</h4>
				</header>	
				<p className={classes.itemText}>
					I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed 
				</p>
			</div>
		</article>
	);
}

export default MenuItem;