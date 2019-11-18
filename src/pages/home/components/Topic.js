import React from 'react';
import { connect } from 'react-redux';
import {
  TopicWrapper,
  TopicItem,
  TopicMore
} from '../style';

class Topic extends React.PureComponent {
  render() {
    const { topicList } = this.props;
    const topicListJS = topicList.toJS();

    return (
      <TopicWrapper>
        {
          topicListJS.map((item) => {
            return (
              <TopicItem key={item.id}>
                <img src={item.imgUrl} alt="" />
                {item.title}
              </TopicItem>
            )
          })
        }
        <TopicMore>点击查看更多</TopicMore>
      </TopicWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const topicList = state.getIn(['home', 'topicList']);
  return {
    topicList
  }
};

export default connect(mapStateToProps, null)(Topic);