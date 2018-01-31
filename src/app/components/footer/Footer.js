import React, {Component} from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';

import Logo from 'app/images/bkg.svg';

class Footer extends Component{
	render(){
		return(
			<footer id="colophon" className="footer">
				<div className="content container">
					<div className="row">
						<div className="col-6 d-flex align-items-center">
							<div className="logo">
								<Link to="/">
									<ReactSVG path={Logo} className={`svg svg-color whitetocolor`}/>
								</Link>
							</div>
							<div className="info">
								<a href="mailto:brett.grisinger@gmail.com">brett.grisinger@gmail.com</a>
								<a href="tel:303-884-4919">303-884-4919</a>
							</div>
						</div>
					</div>

					<div className="copyright row">
						<div className="col-6">
							&copy; 2018 Brett Grisinger. All rights reserved.
						</div>
					</div>
				</div>



				<div className="gradient"></div>
			</footer>
		);
	}
}

export default Footer;
