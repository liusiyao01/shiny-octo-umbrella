/**
 * Created by liusiyao on 2017/7/24.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

// css
import './style.less';

// ant-design
import {Collapse, Card} from 'antd';
const Panel = Collapse.Panel;

// util
import showFormatDate from '../../util/formatDate';

class SearchComponent extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }



    render() {
        const {list, item} = this.props.searchList;
        const listNum = list && list.length ? list.length : 0;
        const itemNum = item && item.length ? item.length : 0;
        const commonStyle = {
            background: '#fff',
            borderRadius: 4,
            marginBottom: 100,
        };
        const listPanel = {
            header: '有' + listNum + '条todoList搜索结果',
            key: 1,
            style: commonStyle,
            disabled: listNum ? false : true
        };
        const itemPanel = {
            header: '有' + itemNum + '条todo搜索结果',
            key: 2,
            style: commonStyle,
            disabled: itemNum ? false : true
        };

        return (
            <div id="search">
                <Collapse bordered={false}>
                    <Panel {...itemPanel}>
                        {
                            item && item.map((item, index) => {
                                const deadline = showFormatDate(item.deadline);
                                const created = showFormatDate(item.created);
                                return (
                                    <Card key={index}
                                          style={{
                                              marginBottom: index !== itemNum - 1
                                                            ? '5px' : '0'
                                          }}
                                          className="item-card"
                                    >
                                        <h1>{item.item_name}</h1>
                                        <div className="content">
                                            <p className="list-name">
                                                计划：{item.list_name}</p>
                                            <div className="date-wrapper clear-fix">
                                                <p>
                                                    期限： {deadline}</p>
                                                <p>
                                                    作成日： {created}</p>
                                            </div>
                                        </div>
                                    </Card>
                                );
                            })
                        }
                    </Panel>
                    <Panel {...listPanel}>
                        {
                            list && list.map((item, index) => {
                                const created = showFormatDate(item.created);
                                return (
                                    <Card key={index}
                                          style={{
                                             marginBottom: index !== itemNum - 1
                                                 ? '5px' : '0'
                                          }}
                                          className="list-card"
                                    >
                                        <h1>{item.list_name}</h1>
                                        <p className="list-created">
                                            作成日： {created}
                                        </p>
                                    </Card>
                                );
                            })
                        }
                    </Panel>
                </Collapse>
            </div>
        );
    }
}

export default SearchComponent;