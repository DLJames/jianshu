import * as Type from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

export const handleInputFocus = (value) => ({
    type: Type.HANDLE_INPUT_FOCUS,
    value
});

const initList = (value) => ({
  type: Type.INIT_LIST,
  value
});

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      dispatch(initList(res.data.data));
    }).catch((err) => {
      console.log('err=', err);
    });
  }
}