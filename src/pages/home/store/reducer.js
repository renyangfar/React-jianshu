import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultStore = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 0,
    showScroll: false,
});

export default (state = defaultStore, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                topicList: action.data.get('topicList'),
                articleList: action.data.get('articleList'),
                recommendList: action.data.get('recommendList')
            });
        case constants.ADD_HOME_DATA:
            return state.merge({
                articleList: state.get('articleList').concat(action.data),
                articlePage: state.get('articlePage') + 1,
            });
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.data);
        default:
            return state;
    }
}