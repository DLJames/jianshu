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
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Action } from './store';
import { Action as LoginAction } from '../../pages/login/store';

const mapStateToProps = (state, ownProps) => {
  // const focus = state.get('header').get('focus');
  const focus = state.getIn(['header', 'focus']);
  const mouseIn = state.getIn(['header', 'mouseIn']);
  const list = state.getIn(['header', 'list']);
  const page = state.getIn(['header', 'page']);
  const totalPage = state.getIn(['header', 'totalPage']);
  const login = state.getIn(['login', 'login']);
  return {
    focus,
    mouseIn,
    list,
    page,
    totalPage,
    login
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(Action.getList(true));
      dispatch(Action.handleInputFocus(true));
    },
    handleInputBlur() {
      dispatch(Action.handleInputFocus(false));
    },
    handleMouseEnter() {
      dispatch(Action.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(Action.mouseLeave());
    },
    handlePageChange(page, totalPage, spinIcon) {
      let newPage = page;
      if(newPage < totalPage) {
        newPage++;
      }
      if(newPage === totalPage) {
        newPage = 1
      }
      dispatch(Action.chanePage(newPage));
      let originAngel = spinIcon.style.transform.replace(/[^0-9]/ig, '');

      if(originAngel) {
        originAngel = parseInt(originAngel);
      }else {
        originAngel = 0;
      }
      spinIcon.style.transform = 'rotate(' + originAngel + 360 + 'deg)';
    },
    hanldeLogout() {
      dispatch(LoginAction.handleLogout());
    }
  }
};

class Header extends React.Component {
  
  render() {
    const { focus, list, login, handleInputFocus, handleInputBlur, hanldeLogout } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo logoPic={logoPic} />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left app-download">App下载</NavItem>
          {
            login ? 
              <NavItem onClick={hanldeLogout} className="right">退出</NavItem> : 
              <Link to="/login"><NavItem className="right">登录</NavItem></Link>
          }
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <NavSearchWrapper>
            <NavSearch
              className={focus ? 'focused' : ''}
              onFocus={() => handleInputFocus(list)}
              onBlur={handleInputBlur}
            ></NavSearch>
            <i className={focus ? 'focused iconfont search-btn' : 'iconfont search-btn'}>&#xe64d;</i>
            {this.getListArea()}
          </NavSearchWrapper>
        </Nav>
        <Addition>
          <Link to="/write">
            <Button className="writting">
              <i className="iconfont">&#xe615;</i>
              写文章
            </Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }

  getListArea() {
    const { focus, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handlePageChange } = this.props;
    const pageList = [];
    const newList = list.toJS();

    if(!newList.length) {
      return;
    }

    for(let i = (page - 1) * 10; i < page * 10; i++) {
      pageList.push(<SearchInfoItem key={newList[i].id}>{newList[i].name}</SearchInfoItem>);
    }

    if (focus || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handlePageChange(page, totalPage, this.spinIcon)}>
              <i ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe65f;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <div>
            {pageList}
          </div>
        </SearchInfo>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);