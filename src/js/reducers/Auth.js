import { SET_CURRENT_USER, SET_AUTH_ERROR, REMOVE_CURRENT_USER } from '../actions/Types';

const initialState = {
  isAuthenticated: false,
  user: {}
}

export default (state = initialState, action = {}) => {
  switch(action.type) {

    case SET_CURRENT_USER:
      return Object.assign({}, state, { isAuthenticated: true, user: action.data });
    
    case REMOVE_CURRENT_USER:
      return Object.assign({}, state, { isAuthenticated: false, user: action.data });

    case SET_AUTH_ERROR:
      return Object.assign({}, state, { isAuthenticated: false, user: {} });

	default: return state;
  }
}
