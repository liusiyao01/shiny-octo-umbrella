/**
 * Created by liusiyao on 2017/7/24.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

// components
import ListItem from './ListItem/index';
import AddItem from './AddItem/index';
import ErrorPage from  '../ErrorPage/index';

// css
import './style.less';

//util
import showFormatDate from '../../util/formatDate';

class DetailListComponent extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const detailList = this.props.detailList;
        return (
            <div id="detail-list">
                <h4 style={
                    {
                        fontSize: '20px'
                    }
                }>{this.props.itemname}</h4>
                <AddItem
                    onValid={this.props.onValid}
                    onAdd = {this.props.onAddHandler}
                />
                {
                    detailList
                    ? detailList.map((item, index) => {

                        const created = showFormatDate(item.created);
                        const nearest_deadline = showFormatDate(
                            item.nearest_deadline);
                        const ListItemProps = {
                            title: item.item_name,
                            created,
                            nearest_deadline,
                            is_done: item.is_done,
                            onChangeStatusHandler: this.props.onChangeStatus
                        };
                        return (
                            <ListItem key={index} {...ListItemProps}/>
                        );
                    })
                    : <ErrorPage title='暂无详细信息'/>
                }
            </div>
        );
    }
}

export default DetailListComponent;