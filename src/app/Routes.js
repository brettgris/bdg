import React, {Component} from 'react';

import { Switch, Route } from 'react-router';

import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';

class Routes extends Component{
	render(){
		return(
			<div className="main">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/project/:id" component={Detail} />
				</Switch>
			</div>
		)
	}
}

export default Routes;
