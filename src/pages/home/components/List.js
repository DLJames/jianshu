import React from 'react';
import {
  ListWrapper,
  ListItem,
  LoadMore
} from '../style';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Action } from '../store';

class List extends React.PureComponent {
  render() {
    const { list, loadMore, loadMorePage } = this.props;
      return (
        <ListWrapper>
          {
            list.map((item, idx) => (
              <Link key={idx} to={'/detail/' + item.get('id')}>
                <ListItem>
                  <div className="list-left">
                    <h3>{item.get('title')}</h3>
                    <div>{item.get('desc')}</div>
                  </div>
                  <div className="list-right">
                    <img src={item.get('imgUrl')} alt="" />
                  </div>
                </ListItem>
              </Link>
            ))
          }
          <LoadMore onClick={() => loadMore(loadMorePage)}>加载更多</LoadMore>
        </ListWrapper>
      );
    }
}

const mapStateToProps = (state) => ({
  list: state.get('home').get('list'),
  loadMorePage: state.getIn(['home', 'loadMorePage'])
});

const mapDispatch = (dispatch) => {
  return {
    loadMore(loadMorePage) {
      dispatch(Action.loadMore(loadMorePage+1));
    }
  }
}

export default connect(mapStateToProps, mapDispatch)(List);