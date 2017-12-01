import { createStore } from 'redux';
import budgets from './category/reducer';

const store = createStore(budgets);

export default store;