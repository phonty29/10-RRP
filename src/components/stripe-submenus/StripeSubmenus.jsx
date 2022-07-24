import {useEffect} from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Hero from './Hero';
import Submenu from './Submenu';
import { bodyStyle } from '../../utils/utils';

const StripeSubmenus = () => {
	useEffect(() => {
        bodyStyle.backgroundColor = '#f1f5f8';
	    bodyStyle.color = '#102a42';		
	}, []);
	return (
		<>
			<Navbar/>
			<Sidebar/>
			<Hero/>
			<Submenu/>
		</>
	);
}

export default StripeSubmenus;