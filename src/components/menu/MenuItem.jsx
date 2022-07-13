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
					{item.text}
				</p>
			</div>
		</article>
	);
}

export default MenuItem;