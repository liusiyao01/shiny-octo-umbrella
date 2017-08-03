/**
 * Created by liusiyao on 2017/7/23.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

// config
import {createListText} from '../../config/allText';

// component
import { Input, Button } from 'antd';

// css
import './style.less';

class CreateListComponent extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.onCreateHandler = this.onCreateHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.state = {
            itemTitle: '',
            errorText: ''
        };
    }

    onCreateHandler() {
        this.props.onClickHandler(this.state.itemTitle);
        this.setState({
            itemTitle: ''
        });
    }

    onChangeHandler(e) {
        const inputText = e.target.value;
        const errorText = this.props.valid(inputText);
        this.setState({
            itemTitle: inputText,
            errorText
        });
    }

    render() {
        const inputProps = {
            size: 'large',
            value: this.state.itemTitle,
            placeholder: createListText.inputPlaceholder,
            style: {
                width: '85%',
                marginRight: '10px'
            },
            onChange: this.onChangeHandler,
            onPressEnter: this.onCreateHandler
        };

        const buttonProps = {
            type: "primary",
            onClick: this.onCreateHandler,
            disabled: !!this.state.errorText
        };

        return (
            <div id="create-list">
                <Input {...inputProps}/>
                <Button {...buttonProps}>Primary</Button>
                <p style={{
                    visibility: this.state.errorText ? '' : 'hidden',
                    color: '#f04134'
                }}>{this.state.errorText}</p>
            </div>
        );
    }
}

export default CreateListComponent;