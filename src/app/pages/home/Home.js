import React, {Component} from 'react';
import './Home.css';

import Contact from 'app/components/contact/Contact';

class Home extends Component{
	render(){
		return (
			<div className="home">
				<Contact />
			</div>
		);
	}
}

export default Home;
