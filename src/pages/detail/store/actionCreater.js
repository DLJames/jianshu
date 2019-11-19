import { Type } from './index';
import axios from 'axios';

const initData = (value) => ({
  type: Type.INIT_DATA,
  value
});

export const getData = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then((res) => {
      const data = res.data.data;
      dispatch(initData(data));
    }).catch((err) => {
      console.log('err=', err);
    });
  }
}