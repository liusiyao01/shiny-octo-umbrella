/**
 * Created by liusiyao on 2017/7/24.
 */
import * as actionTypes from '../constants/todoListDetail';

export function update(data) {
    return {
        type: actionTypes.DETAIL_UPDATE,
        data
    };
}

export function add(item) {
    return {
        type: actionTypes.DETAIL_ADD,
        data: item
    };
}