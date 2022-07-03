import { createStore } from 'redux';
import myReducer from '../reducer/myReducer';

const myStore = createStore(myReducer);

export default myStore;