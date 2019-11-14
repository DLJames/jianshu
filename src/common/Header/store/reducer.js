import * as Type from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focus: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})

export default (state = defaultState, action) => {
  const { type, value } = action;

  switch (type) {
    case Type.HANDLE_INPUT_FOCUS:
      return state.set('focus', value);
    case Type.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case Type.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case Type.INIT_LIST:
      // return state.set('list', fromJS(value));
      return state.merge({
        list: fromJS(value)
      });
    case Type.SET_PAGES:
      return state.set('totalPage', value);
    case Type.CHANGE_PAGE:
      return state.set('page', value);
    default:
      return state;
  }
};