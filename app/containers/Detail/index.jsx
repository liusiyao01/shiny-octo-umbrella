/**
 * Created by liusiyao on 2017/7/23.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import DetailList from './subPage/DetailList';

class Detail extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        let itemName = this.props.params.itemname;
        return (
            <div>
                <DetailList itemName={itemName}/>
            </div>
        );
    }
}

export default Detail;