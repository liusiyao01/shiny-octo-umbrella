/**
 * Created by liusiyao on 2017/7/23.
 */
import {combineReducers} from 'redux';
import todoList from './todoList';
import todoListDetail from './todoListDetail';
import searchList from './searchList';

export default combineReducers({
    todoList,
    todoListDetail,
    searchList
});