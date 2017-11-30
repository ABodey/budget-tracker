import * as actions from './constants';

export function categories(state = null, { type, payload }) {
  switch (type) {
    case actions.CATEGORY_LOAD:
      return payload;
    case actions.CATEGORY_ADD:
      return [
        ...state,
        payload
      ];
    case actions.CATEGORY_REMOVE:
      return state.filter(p => p._id !== payload);
    case actions.CATEGORY_UPDATE:
      return state.map(p =>(
        p._id === payload._id ? { ...p, ...payload } : p
      ));
    default:
      return state;
  }
}

export function categoryError(state= null, { type, payload }) {
  switch(type) {
    case actions.CATEGORY_ADD:
    case actions.CATEGORY_REMOVE:
    case actions.CATEGORY_UPDATE:
      return null;
    case actions.CATEGORY_ERROR:
      return payload;
    default:
      return state;
  }
}

export function loading (state = false, { type }) {
  switch(type) {
    case actions.CATEGORY_ADD:
    case actions.CATEGORY_REMOVE:
    case actions.CATEGORY_UPDATE:
    case actions.CATEGORY_LOAD:
      return false;
    case actions.LOADING:
      return true;
    default:
      return state;
  }
}