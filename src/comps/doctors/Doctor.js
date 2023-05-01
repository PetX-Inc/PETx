
import React, {Component} from 'react'
import axios from 'axios'
import './Doctors.css'
import {doctors} from '../helpers/Data'

class Doctor extends Component
{

	handleClick(doc)
	{
		let amount = doc.fee*100
		let paymentObj = {
			redirectUrl: "doctors",
			stripePaymentObj: {
				price_data:{
					currency: 'usd',
					  product_data:{
						name: `${doc.name}'s Appointment Fee`
					},  
					unit_amount:amount,
				},
				quantity: 1
			}
		}
		
		fetch("http://localhost:8080/process-payment",{
			method: 'POST',
			body: JSON.stringify(paymentObj),
			headers: {
			  'Content-Type': 'application/json',
			  'Accept': 'application/json',
			},
		})
		.then((response) => {
			console.log("Promise response:", response)
				if (response.ok) return response.json()
				return response.json().then(json => Promise.reject(json))
			})
		.then(({url}) => {
			window.location = url
			})
		.catch((err) => console.log(err))



		/*

		//Payment using AXIOS, currently INTERNAL SERVER ERROR (code:500)

		axios({
			method: 'POST',
			url: 'http://localhost:8080/process-payment',
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
			},
			//withCredentials: true,
			data: JSON.stringify(paymentObj)
		})
		.then((response) => {
				if (response.ok) 
				{
					return response.json()
				}
			})
		.then(({url}) => {
			console.log(url)
				//window.location = url
			})
		.catch((err) => console.log(err)) 

		*/



	}

	display_products = _ =>
	{
		let docs = doctors.map(doc =>
		{
			return (
				<div className = 'c col-lg-3 col-md-6 col-12 mb-3' key = {Math.random()}>
					<div className = 'card shadow-lg product-one'>
						<div className = 'card-header'>
							<h6 className = 'product-name p-1 my-auto text-center'>{doc.name}</h6>
							<div className = "stars text-center text-warning">
								<span className = 'fas fa-star me-1'></span>
								<span className = 'fas fa-star me-1'></span>
								<span className = 'fas fa-star me-1'></span>
								<span className = 'fas fa-star me-1'></span>
								<span className = 'fas fa-star me-1'></span>
							</div>
						</div>
						<div className = 'card-body'>
							<img className = 'img-fluid' src = {doc.img} alt = {doc.alt} />
						</div>
						<div className = "card-footer">
							<div className = 'pricing d-flex justify-content-between align-items-center'>
								<div className = 'price'>
									{/* <span className = 'first-price d-block text-danger text-decoration-line-through fst-italic'>{item.oldp}</span>*/}
									<span className = 'second-price d-block'>{doc.fee} USD</span>
								</div>
								<div className = 'shop-btn'>
									<button className = 'btn btn-outline-success text-capitalize btn-sm' onClick={()=>this.handleClick(doc)}>Contact</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		})
		return docs
	}

	render()
	{
		return (
			//zindex code by Mohsin
			//added new line below and commented previous line i.e the next one
			<section className = 'zindexdoc products py-5 mb-5' id = 'products'>

			{/* </section><section className = 'products py-5 mb-5' id = 'products'> */}
				<div className = 'container'>
					<div className = 'title'>
						<h2 className = 'text-capitalize text-center mb-5 p-3 position-relative'>Doctors</h2>
					</div>
					<div className = 'row justify-content-center'>
						{this.display_products()}
					</div>
				</div>
			</section>
		)
	}
}

export default Doctor;