import *  as ACTIONS from './auth.constants';
import authApi from '../../services/auth-api';
import { getStoredToken } from '../services/request';

export function checkForToken() {
  return dispatch => {
    const token = getStoredToken();
    if(!token){
      dispatch({ type: ACTIONS.CHECKED_TOKEN });
      return;
    }
    dispatch({ type: ACTIONS.GOT_TOKEN, payload: token });
    return authApi.verify()
      .then(() => authApi.getUser())
      .then(({ user }) => {
        dispatch({ type: ACTIONS.SET_CURRENT_USER, payload: user });
      })
      .catch(error => {
        dispatch({ type: ACTIONS.AUTH_FAILED, payload: error });
      });
  };  
}

export function signin(credentials) {
  return dispatch => {
    authApi.signin(credentials)
      .then(({ token }) => {
        dispatch({ type: ACTIONS.GOT_TOKEN, payload: token });
      })
      .then(() => authApi.getUser())
      .then(({ user }) => {
        return dispatch({ type: ACTIONS.SET_CURRENT_USER, payload: user });
      })
      .catch(error => {
        return dispatch({ type: ACTIONS.AUTH_FAILED, payload: error });
      });
  };
}

export function signup(user) {
  return dispatch => {
    authApi.signup(user)
      .then(({ token }) => {
        dispatch({ type: ACTIONS.GOT_TOKEN, payload: token });
      })
      .then(() => authApi.getUser())
      .then(({ user }) => {
        dispatch({ type: ACTIONS.SET_CURRENT_USER, payload: user });
      })
      .catch(error => {
        dispatch({ type: ACTIONS.AUTH_FAILED, payload: error });
      });
  };
}

export function updateUser(data){
  return {
    type: ACTIONS.UPDATE_USER, payload: authApi.updateUser(data)
  };
}

export function signout() {
  return { ttype: ACTIONS.LOGOUT };
}