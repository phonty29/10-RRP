import classes from './StripeSubmenus.module.css';
import HeroInfo from './HeroInfo';
import phone from '../../assets/images/stripe-submenus/phone.svg';

const Hero = () => {
	return (
		<section className={classes.hero}>
			<div className={classes.heroCenter}>
				<HeroInfo/>
				<article className={classes.heroImages}>
					<img src={phone} alt="phone" className={classes.phoneImg}/>
				</article>
			</div>
		</section>
	);
}

export default Hero;