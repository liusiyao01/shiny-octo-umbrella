/**
 * Created by liusiyao on 2017/7/25.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

// ant-design
import {Card} from 'antd';

// css
import './style.less';

class ErrorPage extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <Card className="error-page">
                <p>{this.props.title}</p>
            </Card>
        );
    }
}

export default ErrorPage;