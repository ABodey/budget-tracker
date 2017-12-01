import *  as actions from './constants';
import shortid from 'shortid';

export function addCategory(budget) {
  budget._id = shortid.generate();
  budget.timestamp = Date();
  return {
    type: actions.CATEGORY_ADD,
    payload: budget
  };
}

export function updateCategory(budget) {
  return {
    type: actions.CATEGORY_UPDATE,
    payload: budget
  };
}

export function removeCategory(id) {
  return {
    type: actions.CATEGORY_REMOVE,
    payload: id
  };
}
