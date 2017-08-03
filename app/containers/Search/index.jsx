/**
 * Created by liusiyao on 2017/7/24.
 */

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchListActionsFromOtherFile from '../../actions/searchListAction';

// components
import SearchComponent from '../../components/SearchComponent/index';

class Search extends React.Component {
    constructor(...arg) {
        super(...arg);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <SearchComponent searchList={this.props.searchList}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        searchList: state.searchList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        searchActions: bindActionCreators(searchListActionsFromOtherFile, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);