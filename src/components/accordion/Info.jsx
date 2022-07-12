import SingleAccordion from './SingleAccordion';

const Info = ({className}) => {
	return (
		<section className={className}>
			<SingleAccordion header={"Do I have to allow the use of cookes?"} text={"Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."}/>
			<SingleAccordion header={"How do I change my My Page password?"} text={"Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse."}/>
			<SingleAccordion header={"What is BankID?"} text={"Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial."}/>
			<SingleAccordion header={"Whose birth number can I use?"} text={"Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify."}/>
			<SingleAccordion header={"When do I recieve a password ordered by letter?"} text={"Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan"}/>
		</section>
	);
}

export default Info;