import { Type } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  login: false
});

export default (state = defaultState, action) => {
  const { type, value } = action;

  switch (type) {
    case Type.HANDLE_LOGIN: 
      return state.set('login', value);
    case Type.HANDLE_LOGOUT: 
      return state.set('login', value);
    default:
      return state;
  }
};