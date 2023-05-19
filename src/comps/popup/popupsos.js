import React, { useState, useEffect, useRef, Component } from 'react';
import { Form, Field } from 'react-final-form';
import "./popup.css"; // import CSS file with blur-effect class
import {rescuers} from '../helpers/Data'
import axios  from 'axios';

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
    super(props);
  
    // ref
    // this.nameRef = React.createRef();
    // this.emailRef = React.createRef();
    // this.phoneRef = React.createRef();
    // this.descRef = React.createRef();
    // this.locationRef = React.createRef();

  // latest code
  this.state = {
    isOpen: false,
    // type: 'sos', // set the default selected form type as SOS
    // type: this.props.type || 'sos',
    // doctor: this.props.doctor? this.props.doctor : "Doctor Not Selected",
    
    // submittedType: '', // added state variable to hold the submitted type

    // name: "",
    // email: "",
    // phone: "",
    // desc: "",
    // location:""
  };
  }
  
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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  // handleOnChange = () => {
    
  //   var nameVar = this.nameRef.current.value;
  //   this.setState({name : nameVar});


  //   var emailVar = this.emailRef.current.value;
  //   this.setState({email : emailVar});

  //   var phoneVar = this.phoneRef.current.value;
  //   this.setState({phone : phoneVar});

  //   var descVar = this.descRef.current.value;
  //   this.setState({desc: descVar});

  //   var locationVar = this.locationRef.current.value;
  //   this.setState({ location : locationVar});

  //   console.log("Name Var ", nameVar)
  //   // console.log(emailVar)
  //   // console.log(descVar)
  //   // console.log(phoneVar)
  //   // console.log(locationVar)
  //   console.log("Change state", this.state.name)
  // }
  
  handleSubmit = (values) => {

    console.log('Form submitted:', values);

    // console.log("Name ref" ,this.nameRef)



    // let { name, email, phone, desc, location} = this.state;

    console.log("Console logs ")
    // var nameVar = document.getElementById("name");

    let name =document.getElementById("name").value;
    let phone =document.getElementById("phone").value;
    let email =document.getElementById("email").value;
    let desc =document.getElementById("desc").value;
    let location =document.getElementById("location").value;

    
    console.log(name)
    console.log(email)
    console.log(desc)
    console.log(phone)
    console.log(location)


    axios.post('http://localhost:8080/api/appt/makeSoS', { name, email, phone, desc, location} )
    .then((response) => {
      console.log(response)
      alert("SOS called")
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  

    this.setState({ submittedType: this.state.type }); // update the submitted type
    this.closePopUp();

    
      let clientName=document.getElementById("name").value;
      let clientEmail=document.getElementById("email").value;
      // send email to team members
      let subject =  " SOS Service Call ";
      let body = `Request for appointment from  ${clientName}   ${clientEmail}`;
      sendEmail(values, rescuers,subject,body);

    this.closePopUp();
    
    // if (this.state.type === "doctor")
    // {
    //   console.log(this.state.doctor)

    //   let amount = this.state.doctor.fee*100
    //   let paymentObj = {
    //     redirectUrl: "doctors",
    //     stripePaymentObj: {
    //       price_data:{
    //         currency: 'usd',
    //           product_data:{
    //           name: `${this.state.doctor.name}'s Appointment Fee`
    //         },  
    //         unit_amount:amount,
    //       },
    //       quantity: 1
    //     }
    //   }
      
    //   fetch("http://localhost:8080/process-payment",{
    //     method: 'POST',
    //     body: JSON.stringify(paymentObj),
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json',
    //     },
    //   })
    //   .then((response) => {
    //     console.log("Promise response:", response)
    //       if (response.ok) return response.json()
    //       return response.json().then(json => Promise.reject(json))
    //     })
    //   .then(({url}) => {
    //     window.location = url
    //     })
    //   .catch((err) => console.log(err))

    // }

  };


  handleOnClick = () => {
    this.setState({ isOpen: true });
  }


  render() {
    console.log('Current state:', this.state); // log the current state to console

    const { isOpen } = this.state;
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
                    {/* <div className="form-row">
                      <label htmlFor="type">Form Type:</label>
                      <select id="type" name="type" value={type} onChange={this.handleTypeChange}>
                        <option value="">-- Select type --</option>
                        <option value="doctor">Doctor Appointment</option>
                        <option value="sos">SOS Call</option>
                      </select>
                    </div> */}
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
                      <input id="email" name="email" type="email"   />
                    </div>


                    <div className="form-row">
                            <label htmlFor="desc">Description:</label>
                            <textarea id="desc" name="desc" rows="4" cols="50"   />
                          </div>
                    {/* {type === 'doctor' && (
                      <div className="form-row">
                          <label htmlFor="doctor">Selected Doctor:</label>
                          <input id="doctor" name="doctor" type="text" value={doctor.name} readOnly/>
                        
                      </div>
                    )} */}
                    {/* {type === 'sos' && (
                      <> */}
                        <div className="form-row">
                          <label htmlFor="location">Location:</label>

                            <input id="location" name="location" type="text" />
                          </div>
  
                          
                        {/* </>
                      )} */}
                      <div className="form-row form-buttons">
                            <button type="submit" onClick={this.handleSubmit}>
                              Submit
                                {/* {this.props.type === 'doctor' ? 'Payment' : 'Submit'} */}
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