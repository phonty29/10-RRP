import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import AppRouter from './routes/AppRouter';

const App = () => {
	return (
		<div className="App">
			<Provider store={store}>
				<BrowserRouter>
					<AppRouter/>
				</BrowserRouter>
			</Provider>
		</div>
	);
}

export default App;
