/**
 * Created by liusiyao on 2017/7/23.
 */
import moment from 'moment';

export default function showFormatDate(date) {
    return moment(date).format("YYYY年MM月DD日");
}