import React, {Component} from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';

import Logo from 'app/images/bkg.svg';

class Footer extends Component{
	render(){
		return(
			<footer id="colophon" className="footer container">
				<div className="content row">
					<div className="col-6">
						<div>
							<Link to="/">
								<ReactSVG path={Logo} className={`logo svg svg-color whitetocolor`}/>
							</Link>
						</div>
						<div className="info">
							<a href="mailto:brett.grisinger@gmail.com">brett.grisinger@gmail.com</a>
							<a href="tel:303-884-4919">303-884-4919</a>
						</div>
					</div>

					<div className="copyright col-12">
						&copy; 2018 Brett Grisinger. All rights reserved.
					</div>
				</div>



				<div className="gradient row"></div>
			</footer>
		);
	}
}

export default Footer;
