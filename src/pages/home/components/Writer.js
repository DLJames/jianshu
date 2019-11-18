import React from 'react';
import { connect } from 'react-redux';
import {
  WriterWrapper,
  WriterHeader,
  WriterItem
} from '../style';

class Writer extends React.PureComponent {
  render() {
    const { writerList } = this.props;
    const writerListJS = writerList.toJS();
    return (
      <WriterWrapper>
        <WriterHeader>
          <div>推荐作者</div>
          <div>换一批</div>
        </WriterHeader>
        {
          writerListJS.map((item) => {
            return (
              <WriterItem key={item.id}>
                <img src={item.imgUrl} alt=""/>
                <div className="info">
                  <a href="/u/ef4f2422125f?utm_source=desktop&utm_medium=index-users">{item.name}</a>
                  <p>写了{item.wordNum}字，{item.thumbNum}喜欢</p>
                </div>
              </WriterItem>
            )
          })
        }
      </WriterWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
   writerList: state.getIn(['home', 'writerList'])
});

export default connect(mapStateToProps, null)(Writer);