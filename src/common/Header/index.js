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
  const list = state.getIn(['header', 'list']);
  return {
    focus,
    list
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(Action.getList(true));
      dispatch(Action.handleInputFocus(true));
    },
    handleInputBlur() {
      dispatch(Action.handleInputFocus(false));
    }
  }
};

class Header extends React.Component {
  
  render() {
    const { focus, handleInputFocus, handleInputBlur } = this.props;
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
            {this.getListArea(focus)}
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

  getListArea(show) {
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
            {
              this.props.list.map((item) => {
                return <SearchInfoItem key={item.id}>{item.name}</SearchInfoItem>;
              })
            }
          </div>
        </SearchInfo>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);