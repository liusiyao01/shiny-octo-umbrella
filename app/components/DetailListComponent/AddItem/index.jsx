/**
 * Created by liusiyao on 2017/7/24.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

// css
import './style.less';

// ant-design
import { DatePicker, Button, Card, Input} from 'antd';

class AddItem extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.dateChangeHandler = this.dateChangeHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.state = {
            text: '',
            date: null,
            errorText: '',
            dateString: ''
        };
    }

    inputChangeHandler(e) {
        const text = e.target.value;
        this.setState({
            text
        });
        const errorText = this.props.onValid(text);
        this.setState({
            errorText
        });
    }

    dateChangeHandler(date, dateString) {
        this.setState({
            date,
            dateString
        });
    }

    onClickHandler() {
        const itemName = this.state.text;
        const date = this.state.dateString;
        this.props.onAdd(itemName, date);
        this.setState({
            text: '',
            date: null
        });
    }

    disabledDate(current) {
    // Can not select days before today and today
    return current && current.valueOf() < Date.now();
}

    render() {
        const inputProps = {
            placeholder: '请输入事件名称',
            onChange: this.inputChangeHandler,
            value: this.state.text

        };
        const buttonProps = {
            shape: 'circle',
            icon: 'plus',
            type: 'primary',
            style: {
                position: 'absolute',
                right: '70px'
            },
            onClick: this.onClickHandler
        };
        const datePickerProps = {
            placeholder: '请选择截止日期',
            onChange: this.dateChangeHandler,
            value: this.state.date,
            disabledDate: this.disabledDate
        };
        return (
            <div id="add-item">
                <Card>
                    <h1 style={{marginBottom: '5px'}}>添加新事件</h1>
                    <div style={{marginBottom: '10px'}}>
                        <Input {...inputProps}/>
                        <p style={{
                            visibility: this.state.errorText ? '' : 'hidden',
                            color: '#f04134'
                        }}>{this.state.errorText}</p>
                    </div>
                    <div className="container">
                        <DatePicker {...datePickerProps}/>
                        <Button {...buttonProps}/>
                    </div>
                </Card>
            </div>
        );
    }
}

export default AddItem;