import * as ACTIONS from './auth.constants';
import { combineReducers } from 'redux';

export default (state = {}, action) => combineReducers({ user, token, error, checkedToken })(state, action);

export function user(state = null, { type, payload }) {
  switch(type) {
    case ACTIONS.FETCHED_USER:
      return payload;
    case ACTIONS.LOGOUT:
    case ACTIONS.AUTH_FAILED:
      return null;
    default:
      return state;
  }
}

export function token(state = null, { type, payload }) {
  switch (type) {
    case ACTIONS.GOT_TOKEN:
      return payload;
    case ACTIONS.LOGOUT:
    case ACTIONS.AUTH_FAILED:
      return null;
    default:
      return state;
  }
}

export function error(state = null, { type, payload }) {
  switch(type) {
    case ACTIONS.AUTH_FAILED:
      return payload;
    case ACTIONS.LOGOUT:
    case ACTIONS.GOT_TOKEN:
    case ACTIONS.FETCHED_USER:
      return null;
    default:
      return state;		
  }
}

export function checkedToken(state = false, { type, payload }) {
  switch(type) {
    case ACTIONS.CHECKED_TOKEN:
    case ACTIONS.FETCHED_USER:
    case ACTIONS.AUTH_FAILED:
      return true;
    default:
      return state;	
  }
}