import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a`
  width: 100px;
  height: 58px;
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  background: url(${props => props.logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  cursor: pointer;
  &.left {
    float: left;
  }
  &.app-download:hover {
    background-color: #eee;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const NavSearchWrapper = styled.div`
  float: left;
  position: relative;
  .search-btn {
    position: absolute;
    right: 5px;
    bottom: 5px;
    border-radius: 20px;
    width: 30px;
    line-height: 30px;
    cursor: pointer;
    text-align: center;
    &.focused {
      background-color: #777;
      color: #FFFFFF;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 240px;
  height: 38px;
  display: inline-block;
  cursor: text;
  font-size: 17px;
  font-weight: 400;
  padding: 0 40px 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  margin-top: 9px;
  margin-left: 20px;
  background: #eee;
  color: #777;
  transition: all .5s ease;
  &::placeholder{
    color: #999;
  }
  &.focused {
    width: 300px;
  }
`;

export const SearchInfo = styled.div`
  width: 300px;
  min-height: 100px;
  padding: 0 20px;
  box-sizing: border-box;
  position: absolute;
  left: 20px;
  top: 58px;
  box-shadow: 0 0 8px rgb(0, 0, 0, .2);
`;

export const SearchInfoTitle = styled.div`
  margin-bottom: 15px;
  margin-top: 20px;
  line-height: 20px;
  font-size: 14px;
  color: #333;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  position: relative;
`;

export const SearchInfoItem = styled.a`
  font-size: 12px;
  float: left;
  border: 1px solid #ddd;
  cursor: pointer;
  line-height: 20px;
  color: #787878;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  display: inline-block;
  border-radius: 3px;
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 58px;
  padding-right: 20px;
`;

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 15px;
  padding: 6px 12px;
  box-sizing: border-box;
  border-radius: 19px;
  line-height: 24px;
  outline: none;
  border: 1px solid #ec6149;
  font-size: 15px;
  font-weight: 400;
  min-width: 80px;
  text-align: center;
  cursor: pointer;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    background-color: #ec6149;
    color: #FFFFFF;
  }
`;