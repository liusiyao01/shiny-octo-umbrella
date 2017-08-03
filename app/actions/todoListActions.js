/**
 * Created by liusiyao on 2017/7/23.
 */
import * as actionTypes from '../constants/todoList';

export function update(data) {
    return {
        type: actionTypes.TODOLIST_UPDATE,
        data
    };
}

export function add(data) {
    return {
        type: actionTypes.TODOLIST_ADD,
        data
    };
}