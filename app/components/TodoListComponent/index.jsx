/**
 * Created by liusiyao on 2017/7/23.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link} from 'react-router';

// ant-design
import {Card} from 'antd';

// util
import showFormatDate from '../../util/formatDate';

// css
import './style.less';

// text
import {todoListText} from '../../config/allText';

class TodoListComponent extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        let todoList = this.props.todoList;
        return (
            <div id="todo-list">
                {
                    todoList.map((item, index) => {
                        const deadline = item.nearest_deadline ? '~' + showFormatDate(item.nearest_deadline) : '';
                        const cardProps = {
                            title: item.list_name,
                            extra: deadline ? '' : <span style={{color: 'red'}}>New</span>,
                            style: {
                                marginBottom: '5px'
                            }
                        };
                        return (
                            <Link to={'/detail/' + item.list_name} key={index}>
                                <Card {...cardProps}>
                                    {
                                        item.item_count
                                        && item.finished_item_count
                                            ? <p>{item.item_count}个中
                                            {item.finished_item_count}已经完成</p>
                                            : <p>{todoListText.newItem}</p>
                                    }
                                    {

                                    }
                                    <p>{deadline}</p>
                                </Card>
                            </Link>
                        );
                    })
                }
            </div>
        );
    }
}

export default TodoListComponent;