/**
 * Created by liusiyao on 2017/7/29.
 */
import * as actionTypes from '../constants/searchList';

export function update(data) {
    return {
        type: actionTypes.SEARCHLIST_UPDATE,
        data
    };
}