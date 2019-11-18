import React from 'react';
import { connect } from 'react-redux';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackToTop
} from './style';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import List from './components/List';
import { Action } from './store';

class Home extends React.PureComponent {

  goToTop() {
    console.log('click')
    window.scrollTo(0, 0);
  }

  render() {
    const { showBackTop } = this.props;
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4787/c4193ae08ae78a40e945d1e75ff84b4592147b13.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        {
          showBackTop ? <BackToTop onClick={this.goToTop.bind(this)}>Top</BackToTop> : null
        }
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.getHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    this.unBindEvents();
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollShow);
  }

  unBindEvents() {
    window.removeEventListener('scroll', this.props.changeScrollShow);
  }
}

const mapState = (state) => ({
  showBackTop: state.getIn(['home', 'showBackTop'])
});

const mapDispatchToProps = (dispatch) => {
  return {
    getHomeData() {
      dispatch(Action.getHomeData());
    },
    changeScrollShow() {
      if(document.documentElement.scrollTop > 100) {
        dispatch(Action.changeScrollShow(true));
      }else {
        dispatch(Action.changeScrollShow(false));
      }
    }
  }
}

export default connect(mapState, mapDispatchToProps)(Home);