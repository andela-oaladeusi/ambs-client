import AuthApi from '../utils/apiCalls/AuthApi';
import { SET_CURRENT_USER, SET_AUTH_ERROR, REMOVE_CURRENT_USER } from './Types';
import { setTokenCookie, removeTokenCookie } from '../utils/setCookies';
import { browserHistory } from 'react-router';


class Actions {
  static setCurrentUser(data) {
    return { type: SET_CURRENT_USER, data };
  }

  static removeCurrentUser(data) {
    return { type: REMOVE_CURRENT_USER, data };
  }

  static authError(data) {
    return { type: SET_AUTH_ERROR, data };
  }
}

export const normalUserLogin = (loginDetails) => (dispatch) => {
  AuthApi.normalUserLogin(loginDetails)
     .then((res) => {
       setTokenCookie(res.data.token);
       dispatch(Actions.setCurrentUser(res.data.user));
       browserHistory.push('/');
     })
    .catch((error) => {
      dispatch(Actions.authError(error.response.data));
    });
};

export const confirmAccount = (loginDetails, token) => (dispatch) => {
  AuthApi.confirmAccount(loginDetails, token)
     .then((res) => {
       setTokenCookie(res.data.token);
       dispatch(Actions.setCurrentUser(res.data.user));
       browserHistory.push('/');
     })
    .catch((error) => {
      dispatch(Actions.authError(error.response.data));
    });
};

export const facebookUserLogin = (code) => (dispatch) => {
  AuthApi.facebookUserLogin(code)
     .then((res) => {
       setTokenCookie(res.data.token);
       dispatch(Actions.setCurrentUser(res.data.user));
       browserHistory.push('/');
     })
    .catch((error) => {
      dispatch(Actions.authError(error.response.data));
    });
};

export const googleUserLogin = (code) => (dispatch) => {
  AuthApi.googleUserLogin(code)
     .then((res) => {
       setTokenCookie(res.data.token);
       dispatch(Actions.setCurrentUser(res.data.user));
       browserHistory.push('/');
     })
    .catch((error) => {
      dispatch(Actions.authError(error.response.data));
    });
};

export const userRegistration = (registrationDetails) => (dispatch) => {
  AuthApi.userRegistration(registrationDetails)
     .then((res) => {
       browserHistory.push('/auth/account/confirmation');
     })
    .catch((error) => {
      dispatch(Actions.authError(error.response.data));
    });
};

export const getMyInformation = () => (dispatch) => {
  AuthApi.getMyInformation()
     .then((res) => {
       dispatch(Actions.setCurrentUser(res.data.user));
     })
    .catch((error) => {
      dispatch(Actions.authError(error.response.data));
    });
};

export const logout = () => (dispatch) => {
  removeTokenCookie();
  dispatch(Actions.removeCurrentUser({}));
};