import HomeApi from '../utils/apiCalls/HomeApi';
import { SET_HOME } from './Types';


class Actions {
  static setHome(data) {
    return { type: SET_HOME, data };
  }
}

export const home = (code) => (dispatch) => {
  HomeApi.getAll(code)
     .then((res) => {
       console.log('FACEBOOK', res.data);
       dispatch(Actions.setHome(res.data));
     })
    .catch(error => dispatch(error));
};

export const google = (code) => (dispatch) => {
  HomeApi.getGoogle(code)
     .then((res) => {
       console.log('GOOGLE', res.data);
       dispatch(Actions.setHome(res.data));
     })
    .catch(error => dispatch(error));
};
