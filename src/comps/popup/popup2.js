import React, { useState, useEffect, useRef, Component } from 'react';
import { Form, Field } from 'react-final-form';
import "./popup.css"; // import CSS file with blur-effect class
import {rescuers} from '../helpers/Data'
function sendEmail(formData , recipientEmail,subject ,body) {
  console.log('here')

  window.Email.send({
    SecureToken : "45cfeea2-dfe7-40a2-b739-979e3ebfcec6",
    To : recipientEmail,
    From : "honeybutt203@gmail.com",
    Subject : subject,
    Body : body
}).then(
 // message => alert(message)
);
}

class Popup extends Component {
  constructor(props) {
    super(props)
  }
  // latest code
  state = {
    isOpen: false,
    // type: 'sos', // set the default selected form type as SOS
    type: this.props.type || 'sos',

    doctor: this.props.doctor? this.props.doctor : "Doctor Not Selected",
    
    submittedType: '', // added state variable to hold the submitted type
  };

  
  handleClose = () => {
    const { onClose } = this.props;
    if (onClose) {
      onClose();
    }
  };
  

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.popUpRef && !this.popUpRef.contains(event.target)) {
      this.closePopUp();
    }
  };

  openPopUp = () => {
    this.setState({ isOpen: true });
    
  };

  closePopUp = () => {
    this.setState({ isOpen: false });
  };

  handleTypeChange = (event) => {
    this.setState({ type: event.target.value });
  };
   
  
  handleSubmit = (values) => {
    console.log('Form submitted:', values);
    this.setState({ submittedType: this.state.type }); // update the submitted type
    this.closePopUp();

    if (this.state.type === 'doctor') {
         
      let clientName=document.getElementById("name").value;
      let clientEmail=document.getElementById("email").value;
      let subject = "Request for Appointment";
      let body = `Request for appointment from  ${clientName}   ${clientEmail}`;
      // send email to selected doctor
      sendEmail(values,this.state.doctor.email,subject,body);
    } else {
      let clientName=document.getElementById("name").value;
      let clientEmail=document.getElementById("email").value;
      // send email to team members
      let subject =  " SOS Service Call ";
      let body = `Request for appointment from  ${clientName}   ${clientEmail}`;
      sendEmail(values, rescuers,subject,body);
    }

    this.closePopUp();
    
    if (this.state.type === "doctor")
    {
      console.log(this.state.doctor)

      let amount = this.state.doctor.fee*100
      let paymentObj = {
        redirectUrl: "doctors",
        stripePaymentObj: {
          price_data:{
            currency: 'usd',
              product_data:{
              name: `${this.state.doctor.name}'s Appointment Fee`
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

    }

  };


  handleOnClick = () => {
    this.setState({ isOpen: true });
  }


  render() {
    const { isOpen, type, doctor, submittedType } = this.state;
    return (
      <div className="pop-up-button-wrapper">
        {/* <button className='pop-up-button' onClick={this.openPopUp}>SOS | Doctor</button> */}
        {/* {isOpen &&  */}
        
          <div className="pop-up-background">
            <div className="pop-up-content" ref={(node) => (this.popUpRef = node)}>
              <Form
                onSubmit={this.handleSubmit} // call the handleSubmit method
                render={({ handleSubmit, form }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <label htmlFor="type">Form Type:</label>
                      <select id="type" name="type" value={type} onChange={this.handleTypeChange}>
                        <option value="">-- Select type --</option>
                        <option value="doctor">Doctor Appointment</option>
                        <option value="sos">SOS Call</option>
                      </select>
                    </div>
                    <div className="form-row">
                      <label htmlFor="name">Name:</label>
                      <input id="name" name="name" type="text" />
                    </div>
                    <div className="form-row">
                      <label htmlFor="phone">Phone:</label>
                      <input id="phone" name="phone" type="text" />
                    </div>
                    <div className="form-row">
                      <label htmlFor="email">Email:</label>
                      <input id="email" name="email" type="email" />
                    </div>


                    <div className="form-row">
                            <label htmlFor="description">Description:</label>
                            <textarea id="description" name="description" rows="4" cols="50" />
                          </div>
                    {type === 'doctor' && (
                      <div className="form-row">
                          <label htmlFor="doctor">Selected Doctor:</label>
                          <input id="doctor" name="doctor" type="text" value={doctor.name} readOnly/>
                        
                      </div>
                    )}
                    {type === 'sos' && (
                      <>
                        <div className="form-row">
                          <label htmlFor="location">Location:</label>

                            <input id="location" name="location" type="text" />
                          </div>
  
                          
                        </>
                      )}
                      <div className="form-row form-buttons">
                            <button type="submit" onClick={this.handleSubmit}>
                                {this.props.type === 'doctor' ? 'Payment' : 'Submit'}
                            </button>

                            <button type="cancel" onClick={this.handleClose}>
                              Cancel
                            </button>
                      </div>
                    </form>
                  )}
                />
              </div>
            </div>
          
          {/* } */}
        </div>
      );
    }
  }
  

  export default Popup;
