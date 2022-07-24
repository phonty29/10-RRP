import classes from './StripeSubmenus.module.css';

const HeroInfo = () => {
	return (
		<article className={classes.heroInfo}>
			<h1>Payments infrastructure <br/>for the internet</h1>
			<p>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
			<button className={classes.btn}>start now</button>
		</article>
	);
}

export default HeroInfo;