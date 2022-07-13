import {useEffect} from 'react';
import Title from '../GLOBALS/Title';
import ButtonContainer from './ButtonContainer';
import MenuGrid from './MenuGrid';
import classes from './Menu.module.css';
import { bodyStyle } from '../../utils/utils';

const Menu = () => {
	useEffect(() => {
	    bodyStyle.backgroundColor = '#f1f5f8';
	    bodyStyle.color = '#102a42';
	}, []);
	
	return (
		<main>
			<section className={`${classes.menu} ${classes.section}`}> 
				<Title classNames={{title: classes.title, underline: classes.underline}} titleText={"Our menu"}/>
				<ButtonContainer/>
				<MenuGrid className={classes.sectionCenter}/>
			</section>
		</main>
	);
}

export default Menu;