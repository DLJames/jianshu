import * as Type from './constants';
// import { fromJS } from 'immutable';
import axios from 'axios';

const initList = (value) => ({
  type: Type.INIT_LIST,
  value
});

const setPages = (value) => ({
  type: Type.SET_PAGES,
  value
});

export const handleInputFocus = (value) => ({
    type: Type.HANDLE_INPUT_FOCUS,
    value
});

export const mouseEnter = () => ({
  type: Type.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: Type.MOUSE_LEAVE
});

export const chanePage = (value) => ({
  type: Type.CHANGE_PAGE,
  value
});

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      let list = res.data.data;
      let totalPage = Math.ceil(list.length / 10);
      dispatch(initList(list));
      dispatch(setPages(totalPage));
    }).catch((err) => {
      console.log('err=', err);
    });
  }
}