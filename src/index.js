import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import myStore from './store/myStore';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={myStore}>
	  <React.StrictMode>
	    <App />
	  </React.StrictMode>
  </Provider> 
);