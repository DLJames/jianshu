import * as Type from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focus: false,
  list: []
})

export default (state = defaultState, action) => {
  const { type, value } = action;

  switch(type) {
    case Type.HANDLE_INPUT_FOCUS:
      return state.set('focus', value);
    case Type.INIT_LIST:
      return state.set('list', value);
    default: 
      return state;
  }
};