import * as actions from './constants';

export default function moneys(state = [], { type, payload }) {
  switch (type) {
    case actions.CATEGORY_ADD:
      return [
        ...state,
        payload
      ];
    case actions.CATEGORY_REMOVE:
      return state.filter(p => p._id !== payload);
    case actions.CATEGORY_UPDATE:
      return state.map(p => p._id === payload._id ? { ...p, ...payload } : p);
    default:
      return state;    
  }
}