import React from 'react';
import { useSelector } from 'react-redux';
import Buttons from './components/Buttons';

const App = () => {
	const number = useSelector(state => state.number);

	return (
		<div>
			<Buttons/>
			<span style={{display: 'block', textAlign: 'center', fontSize: '20px', fontWeight: 'bold'}}>{number}</span>
		</div>
	);
}

export default App;
