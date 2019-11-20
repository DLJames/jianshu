import { Type } from './index';
import axios from 'axios';

const initLogin = () => ({
  type: Type.HANDLE_LOGIN,
  value: true
});

export const handleLogout = () => ({
  type: Type.HANDLE_LOGOUT,
  value: false
});

export const handleLogin = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account='+account+'&passord='+password).then((res) => {
      const result = res.data.data;

      if(result) {
        dispatch(initLogin());
      }else {
        alert('登陆失败');
      }
    }).catch((err) => {
      console.log('err==', err);
    });
  }
};
