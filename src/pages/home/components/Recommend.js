import React from 'react';
import {
  RecommendWrapper,
  RecommendItem
} from '../style';
import { connect } from 'react-redux';

class Recommend extends React.PureComponent {
  render() {
    const { recommendList } = this.props;
    return (
      <RecommendWrapper>
        {
          recommendList.map((item) => {
            return (
              <RecommendItem key={item.get('id')}>
                <img src={item.get('imgUrl')} alt="Banner s club" />
              </RecommendItem>
            )
          })
        }
      </RecommendWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  recommendList: state.get('home').get('recommendList')
})

export default connect(mapStateToProps, null)(Recommend);