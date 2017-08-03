/**
 * Created by liusiyao on 2017/7/23.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

// components
import ToDoList from './subPage/ToDoList';
import CreateList from './subPage/CreateList';

class Home extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <CreateList/>
                <ToDoList/>
            </div>
        );
    }
}

export default Home;