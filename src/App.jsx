import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AppRouter from './routes/AppRouter';

const App = () => {
	return (
		<div className="App">
			<Provider store={store}>
				<AppRouter/>
			</Provider>
		</div>
	);
}

export default App;
