/**
 * Created by liusiyao on 2017/7/24.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

// ant-design
import {Card, Switch} from 'antd';

// css
import './style.less';

class ListItem extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.state = {
            isChecked: !this.props.is_done
        };
    }

    onChangeHandler(e) {
        const itemName = this.props.title;
        this.props.onChangeStatusHandler(itemName, e);
    }

    render() {
        const {title, created, nearest_deadline, is_done} = this.props;
        const switchProps = {
            className: 'ant-switch-checked',
            style: {
                position: 'absolute',
                right: '50px',
                top: '9px'
            },
            checkedChildren: '未完成',
            unCheckedChildren: '已完成',
            checked: !this.props.is_done,
            onChange: this.onChangeHandler
        };
        return (
            <div id="list-item">
                <Card title={title}>
                    <div className="content">
                        <div>
                            <p>创建日期: {created}</p>
                            <p>最后期限: {nearest_deadline}</p>
                        </div>
                        <Switch {...switchProps}/>
                    </div>
                </Card>
            </div>
        );
    }
}

export default ListItem;