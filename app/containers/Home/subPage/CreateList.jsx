/**
 * Created by liusiyao on 2017/7/23.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

// 链接redux所需
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoListActionsFromOtherFile from '../../../actions/todoListActions';

// component
import CreateListComponent from '../../../components/CreateListComponent/index';

// 请求
import {postNewToDOItem} from '../../../fetch/todoList/todoList';

// text
import {createListText} from '../../../config/allText';

class CreateList extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onValid = this.onValid.bind(this);
    }

    onClickHandler(listName) {
        const newItem = {
            list_name: listName
        };
        const result = postNewToDOItem(newItem);
        result.then(res => {
            return res.json();
        }).then(json => {
            if (json.errno === 0) {
                this.props.todoListActions.add(newItem);
            }
        }).catch(ex => {
            if (__DEV__) {
                console.error('creatlist数据报错, ', ex.message);
            }
        });


    }
    // 添加list校验
    onValid(inputText) {
        const todoList = this.props.todoList;
        const text = inputText.trim().replace(/[^\x00-\xff]/g,"aa");
        const length = text.length;
        const sameTitle = todoList.some((item) => {
            if (item.list_name === inputText) {
                return true;
            }
            return false;
        });
        if (length > 30) {
            return createListText.textTooLong;
        }
        else if (sameTitle) {
            return createListText.titleSame;
        }
        else {
            return '';
        }
    }

    render() {
        return (
            <div>
                <CreateListComponent onClickHandler={this.onClickHandler} valid={this.onValid}/>
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
)(CreateList);