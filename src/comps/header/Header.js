
import React, {Component} from 'react'
import './Header.css'

class Header extends Component
{
	render()
	{
		return (
			<div className = 'hero-page'>
				<header className = 'header min-vh-100 position-relative'>
					<div className = 'img-overlay position-absolute w-100 h-100'></div>
					<div className = 'content position-absolute translate-middle top-50 start-50 text-center'>
						<h3 className = 'brand-name mb-5' ><span>P</span>E<span>T</span>x</h3>
						<p className = 'brand-description mb-3 text-muted'>Trying to build a better community for the animals by providing emergency services, medical services, online shopping center and other services.</p>
						<div className = 'empty-line mx-auto w-25 mb-5'></div>
						<a href = '#navbar' className = 'btn btn-outline-success text-capitalize btn-sm'>click to scroll down <i className="fas fa-arrow-down ms-2"></i></a>
					</div>
				</header>
			</div>
		)
	}
}

export default Header