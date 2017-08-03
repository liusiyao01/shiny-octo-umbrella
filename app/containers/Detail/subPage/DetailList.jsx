/**
 * Created by liusiyao on 2017/7/23.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

// 链接redux所需
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoListDetailActionsFromOtherFile from '../../../actions/todoListDetailActions';

// 请求
import {getDetailList} from '../../../fetch/todoListDetail/todoListDetail';
import {postNewItem} from '../../../fetch/todoListDetail/todoListDetail';
import {postAdd} from '../../../fetch/todoListDetail/todoListDetail';

// component
import DetailListComponent from '../../../components/DetailListComponent/index';
import ErrorPage from '../../../components/ErrorPage/index';

// text
import {createListText} from '../../../config/allText';

//util
import moment from 'moment';

class DetailList extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onValid = this.onValid.bind(this);
        this.resultHandler = this.resultHandler.bind(this);
        this.onAddHandler = this.onAddHandler.bind(this);
    }

    componentDidMount() {
        const itemName = this.props.itemName;
        const result = getDetailList(itemName);
        this.resultHandler(result, (json) => {
            this.props.detailActions.update(json);
        });

    }

    onChangeStatus(itemName, status) {
        const result = postNewItem(itemName, status);
        const todoListDetail = this.props.todoListDetail;
        this.resultHandler(result, json => {
            if (json.errno === 0) {
                todoListDetail.forEach((item) => {
                    if (item.item_name === itemName) {
                        item.is_done = !status;
                    }
                });
                this.props.detailActions.update(todoListDetail);
            }

        });
    }

    onValid(inputText) {
        const todoList = this.props.todoListDetail;
        const text = inputText.trim().replace(/[^\x00-\xff]/g,"aa");
        const length = text.length;
        const sameTitle = todoList.some((item) => {
            if (item.item_name === inputText) {
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

    onAddHandler(itemName, date) {
        const result = postAdd(itemName, date);
        const created = new Date();
        const newItem = {
            item_name: itemName,
            nearest_deadline: moment(date, 'YYYY-MM-DD HH:mm'),
            created,
            is_done: false
        };
        this.resultHandler(result, json => {
            if (json.errno === 0) {
                this.props.detailActions.add(newItem);
            }
        });
    }

    resultHandler(result,callback) {
        result.then(res => {
            return res.json();
        }).then(
            callback
        ).catch(ex => {
            if (__DEV__) {
                console.error('detail页数据报错, ', ex.message);
            }
        });
    }

    render() {
        return (
            <div>
                {
                    <DetailListComponent
                        detailList={this.props.todoListDetail}
                        onChangeStatus={this.onChangeStatus}
                        onValid={this.onValid}
                        onAddHandler = {this.onAddHandler}
                        itemname = {this.props.itemName}
                    />
                }

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todoListDetail: state.todoListDetail
    };
}

function mapDispatchToProps(dispatch) {
    return {
        detailActions: bindActionCreators(todoListDetailActionsFromOtherFile, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailList);