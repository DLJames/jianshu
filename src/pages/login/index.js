import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Action } from './store';
import { Redirect } from 'react-router-dom';

import {
  LoginWrapper,
  LoginButton,
  LoginBox,
  Input
} from './style';

class Login extends PureComponent {
  render() {
    const { login, handleLogin } = this.props;
    if(!login) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" ref={(input) => {this.account = input}} />
            <Input placeholder="密码" type="password" ref={(input) => {this.password = input}} />
            <LoginButton onClick={() => {handleLogin(this.account, this.password)}}>登陆</LoginButton>
          </LoginBox>
        </LoginWrapper>
      );
    }else {
      return <Redirect to="/" />
    }
  }
}

const mapState = (state) => ({
  login: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch) => ({
  handleLogin(accountEle, passwordEle) {
    dispatch(Action.handleLogin(accountEle.value, passwordEle.value));
  }
});

export default connect(mapState, mapDispatch)(Login);