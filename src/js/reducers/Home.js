import { SET_HOME } from '../actions/Types';

const initialState = {
  home: []
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_HOME:
      return action.data;
	default: return state;
  }
}
