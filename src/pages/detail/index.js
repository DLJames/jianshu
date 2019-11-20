import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Action } from './store';
import {
  DetailWrapper,
  Header,
  Content,
  WriterInfo
} from './style';

class Detail extends React.Component {
  render() {
    const { title, content } = this.props;
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <WriterInfo>
          <a href="/u/4fe8054c0fc9" target="_blank">
            <img src="//upload.jianshu.io/users/upload_avatars/14971107/a6e51b2e-0a3e-4253-b367-50f915e8655b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
          </a>
          <div className="info">
            <div>语滔天下</div>
            <div>2019.02.09 10:05:03 字数 1,237 阅读 2,113</div>
          </div>
        </WriterInfo>
        <Content dangerouslySetInnerHTML={{ __html: content }}></Content>
      </DetailWrapper>
    );
  }


  componentDidMount() {
    this.props.getData(this.props.match.params.id);
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => {
  return {
    getData(id) {
      dispatch(Action.getData(id));
    }
  }
};

export default connect(mapState, mapDispatch)(withRouter(Detail));