/**
 * Created by liusiyao on 2017/7/24.
 */
import {get} from '../get';
import {post} from '../post';

export function getDetailList(itemName) {
    const result = get('/api/detail/' + encodeURIComponent(itemName));
    return result;
}

export function postNewItem(itemName, status) {
    const params = {
        item_name: itemName,
        is_done: status
    };
    const result = post('/api/detailchange', params);
    return result;
}

export function postAdd(itemName, date) {
    const params = {
        item_name: itemName,
        nearest_deadline: date
    };
    const result = post('/api/detailadd', params);
    return result;
}