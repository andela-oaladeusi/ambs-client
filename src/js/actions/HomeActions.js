import HomeApi from '../utils/apiCalls/HomeApi';
import { SET_HOME } from './Types';


class Actions {
  static setHome(data) {
    return { type: SET_HOME, data };
  }
}

export const home = () => (dispatch) => {
  HomeApi.getAll()
     .then((res) => {
       dispatch(Actions.setHome(res.data));
     })
    .catch(error => dispatch(error));
};
