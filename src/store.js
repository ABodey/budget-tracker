import { createStore } from 'redux';
import moneys from './category/reducer';

const store = createStore(moneys);

export default store;