/**
 * Created by liusiyao on 2017/7/23.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

// 链接redux所需
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoListActionsFromOtherFile from '../../../actions/todoListActions';

// 请求
import {getToDOList} from '../../../fetch/todoList/todoList';

// components
import TodoListComponent from '../../../components/TodoListComponent/index';
import ErrorPage from '../../../components/ErrorPage/index';

// 引入文本
import {todoListText} from '../../../config/allText';



class ToDoList extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidMount() {
        var result = getToDOList();
        result.then(res => {
            return res.json();
        }).then(json => {
            this.props.todoListActions.update(json);
        }).catch(ex => {
            if (__DEV__) {
                console.error('todoList获取数据报错, ', ex.message);
            }
        });
    };

    render() {
        return (
            <div>
                {
                    this.props.todoList && this.props.todoList.length
                    ? <TodoListComponent todoList={this.props.todoList}/>
                    : <ErrorPage title={todoListText.noTodoList}/>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todoList: state.todoList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        todoListActions: bindActionCreators(todoListActionsFromOtherFile, dispatch)
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList);