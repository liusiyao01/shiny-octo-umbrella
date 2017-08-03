/**
 * Created by liusiyao on 2017/7/23.
 */
import * as actionTypes from '../constants/todoList';

export default function todoList(state = {}, action) {
    switch (action.type) {
        case actionTypes.TODOLIST_UPDATE:
            return [
                ...action.data
            ];
        case actionTypes.TODOLIST_ADD:
            return [
                action.data,
                ...state
            ];
        default:
            return state;
    }
};