import { combineReducers } from 'redux';
import auth from '../components/auth/auth.reducers';
import { categories, categoriesError, categoriesLoading } from '../components/category/category.reducers';
import { expenses, expensesLoading, expensesError } from '../components/expense/expense.reducers';


export default combineReducers({
  auth,
  expenses,
  expensesLoading,
  expensesError,
  categories,
  categoriesError,
  categoriesLoading
});