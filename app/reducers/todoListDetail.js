/**
 * Created by liusiyao on 2017/7/24.
 */
import * as actionTypes from '../constants/todoListDetail';

export default function todoListDetail(state = [], action) {
    switch (action.type) {
        case actionTypes.DETAIL_UPDATE:
            return [
                ...action.data
            ];
        case actionTypes.DETAIL_ADD:
            return [
                action.data,
                ...state
            ];
        default:
            return state;
    }
}