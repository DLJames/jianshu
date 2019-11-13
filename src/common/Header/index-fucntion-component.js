import React from 'react';
import logoPic from '../../statics/logo.png';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  Addition,
  Button,
  NavSearchWrapper
} from './style';
import { connect } from 'react-redux';
import { Action } from './store';

const mapStateToProps = (state, ownProps) => {
  // const focus = state.get('header').get('focus');
  const focus = state.getIn(['header', 'focus']);
  return {
    focus
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(Action.handleInputFocus(true));
    },
    handleInputBlur() {
      dispatch(Action.handleInputFocus(false));
    }
  }
};

const getListArea = (show) => {
  if (show) {
    return (
      <SearchInfo>
        <SearchInfoTitle>
          热门搜索
              <SearchInfoSwitch>
                <i className="iconfont">&#xe65f;</i>
                换一批
              </SearchInfoSwitch>
        </SearchInfoTitle>
        <div>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>React</SearchInfoItem>
          <SearchInfoItem>Vue</SearchInfoItem>
          <SearchInfoItem>Angular</SearchInfoItem>
          <SearchInfoItem>Es6</SearchInfoItem>
        </div>
      </SearchInfo>
    );
  }
}

const Header = (props) => {
  const { focus, handleInputFocus, handleInputBlur } = props;
  return (
    <HeaderWrapper>
      <Logo href="/" logoPic={logoPic} />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left app-download">App下载</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        <NavSearchWrapper>
          <NavSearch
            className={focus ? 'focused' : ''}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          ></NavSearch>
          <i className={focus ? 'focused iconfont search-btn' : 'iconfont search-btn'}>&#xe64d;</i>
          { getListArea(focus) }
        </NavSearchWrapper>
      </Nav>
      <Addition>
        <Button className="writting">
          <i className="iconfont">&#xe615;</i>
          写文章
          </Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);