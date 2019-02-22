import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultStore = fromJS({
    focused: false,
    list: [],
});

export default (state = defaultStore, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        //会返回一个新的对象
        return state.set('focused', true);
    }
    if (action.type === constants.SEARCH_BLUR) {
        return state.set('focused', false);
    }
    if (action.type === constants.CHANGE_LIST) {
        return state.set('list', action.data);
    }
    return state
}