import React from 'react';
import {Router, Route, IndexRoute} from  'react-router';

// components
import App from '../containers/App';
import Home from '../containers/Home/index';
import Detail from '../containers/Detail/index';
import Search from '../containers/Search/index';

class RouteMap extends React.Component {
	render() {
		return (
			<Router history={this.props.history}>
				<Route path='/' component={App}>
					<IndexRoute component={Home}/>
                    <Route path='/detail/:itemname' component={Detail}/>
					<Route path='/search/:keyword' component={Search}/>
				</Route>
			</Router>
		);
	}
}

export default RouteMap;