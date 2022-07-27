import classes from './CocktailDB.module.css';
import CocktailDB from './CocktailDB';
import {useEffect} from 'react';

const CocktailDBAbout = () => {
	return (
		<CocktailDB>
			<section className={`${classes.section} ${classes.aboutSection}`}>
				<h1 className={classes.sectionTitle}>about us</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repudiandae architecto qui adipisci in officiis, aperiam sequi atque perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione hic aspernatur error blanditiis?</p>
			</section>
		</CocktailDB>
	);
}

export default CocktailDBAbout;