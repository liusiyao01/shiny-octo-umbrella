/**
 * Created by liusiyao on 2017/7/24.
 */
import {get} from '../get';

export function getSearchList(keyword) {
    const result = get('/api/search/' + encodeURIComponent(keyword));
    return result;
}