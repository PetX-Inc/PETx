
import React, {Component} from 'react'
import './Navbar.css'
import {navbar_items} from '../helpers/Data'
import {navbar_accounts} from '../helpers/Data'
//import {accounts} from '../helpers/Data'
import { Link } from 'react-router-dom'


import LoginSignUpButton from '../../comps/loginsignup/Accounts2'



class Navbar extends Component
{
	display_navbar_items = _ =>
	{
		let items = navbar_items.map(item =>
		{
			return (
				<li className = "nav-item link" key = {Math.random()}>
			        <Link className = "nav-link p-md-0 py-md-1 px-md-2 me-md-2" to = {`/${item.link}`}><i className = {`${item.icon} me-2`}></i>{item.name}</Link>
			    </li>
			)
		})
		return items
	}

	display_navbar_accounts = _ =>
	{
		// if acc doesnt work, replace back link with a and to with href as normal without routing.
		let accounts = navbar_accounts.map(item =>
		{
			return (
				<li className="nav-item px-1 icon" key = {Math.random()}>
	        		<Link className="nav-link" to = {item.link} target = '_blank' rel="noreferrer">
	        			<i className = {item.icon}></i>
	        		</Link>
	      		</li>
			)
		})
		return accounts
	}

	// display_navbar_useraccounts = _ =>
	// {
	// 	let items = accounts.map(item =>
	// 	{
	// 		return (
	// 			<li className = "nav-item link" key = {Math.random()}>
	// 								<button>
	// 									<LoginSignUpButton />
	// 									LoginSignUp
	// 								</button>
	// 		        <Link className = "nav-link p-md-0 py-md-1 px-md-2 me-md-2" to = {`/${item.link}`}><i className = {`${item.icon} me-2`}></i>{item.name}</Link>
	// 		    </li>
	// 		)
	// 	})
	// 	return items

	// 	//<LoginSignUpButton />
	// }

	render()
	{
		return (
			<nav className="navbar navbar-expand-md sticky-custom active py-1 mb-5" id = 'navbar'>
				<div className = 'container'>
			 		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    		<span className="navbar-toggler-icon">Ξ</span>
			  		</button>
			  		<div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
			    		<ul className="navbar-nav mr-auto">
			    			{this.display_navbar_items()}
			    		</ul>
			    		<ul className = "navbar-nav ml-auto">
			    			{this.display_navbar_accounts()}
			    		</ul>


						<ul className="navbar-nav mr-auto">
			    			{/* {this.display_navbar_useraccounts()} */}
								<LoginSignUpButton />

			    		</ul>
			    	</div>
			    </div>
			</nav>
		)
	}
}

export default Navbar