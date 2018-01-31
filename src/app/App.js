import React, { Component } from 'react';
import './App.css';

import Routes from './Routes';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

class App extends Component {
	componentDidMount(){
		//console.log( "fetch the data" );
	}

  	render() {
   	return (
	      <div className="App">
				<Header />
				{/* <Routes /> */}
				<Footer />
	      </div>
    	);
  	}
}

export default App;
