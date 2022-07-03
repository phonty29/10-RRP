import { createStore } from 'redux';
import rootReducer from '../reducer/rootReducerReducer';

const store = createStore(rootReducer);

export default store;