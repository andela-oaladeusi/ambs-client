import AuthApi from '../utils/apiCalls/AuthApi';
import { SET_CURRENT_USER } from './Types';


class Actions {
  static setCurrentUser(data) {
    return { type: SET_CURRENT_USER, data };
  }
}

export const userLogin = (loginDetails) => (dispatch) => {
  AuthApi.userLogin(loginDetails)
     .then((res) => {
       console.log('login user', res.data);
       dispatch(Actions.setCurrentUser(res.data));
     })
    .catch(error => dispatch(error));
};
