import {useEffect} from 'react';
import Info from './Info';
import { bodyStyle } from '../../utils/utils';
import styles from './Accordion.module.css';

const Accordion = () => {
	useEffect(() => {
	    bodyStyle.backgroundColor = '#4b145b';
	    bodyStyle.color = '#102a42';
	}, []);

	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<h3>questions and answers about login</h3>
				<Info className={styles.info}/>
			</div>
		</main>
	);
}

export default Accordion;