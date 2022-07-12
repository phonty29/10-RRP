import {useState, useEffect, useRef} from 'react';
import {Transition} from 'react-transition-group';
import {accordionDefaultStyle} from '../../utils/utils';
import styles from './Accordion.module.css';

const SingleAccordion = ({index, dispatch, header, text}) => {
	const accordionRef = useRef(null);
	const [reveal, setReveal] = useState(false);
	const [accordionHeight, setHeight] = useState(0);
	useEffect(() => {
		setHeight(accordionRef.current.scrollHeight);
	}, []);


	const transitionStyles = {
		  entering: { maxHeight: accordionHeight },
		  entered: 	{ maxHeight: accordionHeight },
		  exiting:  { maxHeight: 0 },
		  exited:  	{ maxHeight: 0 }
	};

	return (
		<Transition in={reveal} timeout={300}>
			{state => (
			<article className={styles.question}>
				<header>
					<h4>{header}</h4>
					<button className={styles.btn} onClick={() => {setReveal(prev => !prev)}}>
						{reveal ? (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>) : (<svg stroke="currentColor" fill="currentColor" strokeWidth="0" t="1551322312294" viewBox="0 0 1024 1024" version="1.1" pid="10297" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z" pid="10298"></path><path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z" pid="10299"></path></svg>)}
					</button>
				</header>
				<p ref={accordionRef} style={{...accordionDefaultStyle, ...transitionStyles[state]}}>{text}</p>
			</article>
			)}
		</Transition>
	);
}

export default SingleAccordion;
