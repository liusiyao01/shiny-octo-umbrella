/**
 * Created by liusiyao on 2017/7/29.
 */
import * as actionTypes from '../constants/searchList';

export default function searList(state = {}, action) {
    switch (action.type) {
        case actionTypes.SEARCHLIST_UPDATE:
            return action.data;
        default:
            return state;
    }
}