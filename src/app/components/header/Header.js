import React, {Component} from 'react';
import './Header.css';

import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
import Headroom from 'react-headroom';

import Button from '../button/Button';
import Logo from 'app/images/bkg.svg';

// <header id="header" className="site-header fixed-top container d-flex justify-content-between align-items-center mt-3">
// 	header
// 	{/* <div className="ml-2">
// 		<Link to="/">
// 			<ReactSVG path={Logo} className={`logo svg ${settings.color}`} style={{display:'block'}}/>
// 		</Link>
// 	</div>
// 	<Button copy={settings.copy} color={settings.color} to={settings.to} /> */}
// </header>



class Header extends Component{
	render(){

		let settings = {
			copy: "Get In Touch",
			color: "whitetocolor",
			to: "/contact"
		}

		return(
			<Headroom className="header">
				<div className="container d-flex justify-content-between align-items-center content">
					<Link to="/">
						<ReactSVG path={Logo} className={`logo svg svg-color ${settings.color}`}/>
					</Link>
					<Button copy={settings.copy} color={settings.color} to={settings.to} />
				</div>
			</Headroom>
		);
	}
}

export default Header;
