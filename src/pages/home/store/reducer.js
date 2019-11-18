import * as Type from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [],
  list: [],
  recommendList: [],
  writerList: [],
  showBackTop: false,
  loadMorePage: 1
});

export default (state = defaultState, action) => {
  const { type, value } = action;

  switch (type) {
    case Type.INIT_DATA:
      return state.merge({
        topicList: fromJS(value.topicList),
        list: fromJS(value.list),
        recommendList: fromJS(value.recommendList),
        writerList: fromJS(value.writerList)
      });
    case Type.CHANGE_SCROLL_SHOW:
      return state.set('showBackTop', value);
    case Type.ADD_HOME_LIST:
      return state.merge({
        'list': state.get('list').concat(fromJS(value.list)),
        'loadMorePage': value.loadMorePage
      });
    default:
      return state;
  }
};