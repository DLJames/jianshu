import * as Type from './constants';
import axios from 'axios';

const initData = (value) => ({
  type: Type.INIT_DATA,
  value
});

const addHomeList = (list, loadMorePage) => ({
  type: Type.ADD_HOME_LIST,
  value: {
    list,
    loadMorePage
  }
});

export const getHomeData = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const data = res.data.data;
      dispatch(initData(data));
    }).catch((err) => {
      console.log('err=', err);
    });
  }
}

export const changeScrollShow = (value) => ({
  type: Type.CHANGE_SCROLL_SHOW,
  value
});

export const loadMore = (loadMorePage) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page='+loadMorePage).then((res) => {
      const data = res.data.data;
      dispatch(addHomeList(data, loadMorePage));
    }).catch((err) => {
      console.log('err=', err);
    });
  }
}