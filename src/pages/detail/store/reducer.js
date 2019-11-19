import * as Type from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  title: '',
  content: ''
});

export default (state = defaultState, action) => {
   const { type, value } = action;

  switch (type) {
    case Type.INIT_DATA: 
      return state.merge({
        title: value.title,
        content: value.content
      });
    default:
      return state;
  }
}