import React, { useState, useEffect, useRef, Component } from 'react';
import { Form, Field } from 'react-final-form';
import "./popup.css"; // import CSS file with blur-effect class

class Popup extends Component {
  // latest code
  state = {
    isOpen: false,
    // type: 'sos', // set the default selected form type as SOS
    type: this.props.type || 'sos',
    doctor: this.props.doctor || 'Doctor not Selected',
    submittedType: '', // added state variable to hold the submitted type
  };

  handleClose = () => {
    const { onClose } = this.props;
    if (onClose) {
      onClose();

      // this.closePopUp();

    }
  };
  

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);


    //already selected doctor code
    //this.setState({doctor: doctor|| '',});
    //this.setState({ doctor: this.props.doctor });

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
                    {type === 'doctor' && (
                      <div className="form-row">
                        {/* <label htmlFor="doctor">Doctor:</label>
                        <select id="doctor" name="doctor">
                          <option value="">-- Select doctor --</option>
                          <option value="Dr. John">Dr. John</option>
                          <option value="Dr. Jane">Dr. Jane</option>
                          <option value="Dr. Mark">Dr. Mark</option>
                        </select> */}

                          <label htmlFor="doctor">Selected Doctor:</label>
                          <input id="doctor" name="doctor" type="text" value={doctor} readOnly/>
                        
                      </div>
                    )}
                    {type === 'sos' && (
                      <>
                        <div className="form-row">
                          <label htmlFor="location">Location:</label>

                            <input id="location" name="location" type="text" />
                          </div>
  
                          <div className="form-row">
                            <label htmlFor="description">Description:</label>
                            <textarea id="description" name="description" rows="4" cols="50" />
                          </div>
                        </>
                      )}
                      <div className="form-row form-buttons">
                            <button type="submit" onClick={this.handleSubmit}>
                                {this.props.type === 'doctor' ? 'Payment' : 'Submit'}
                            </button>

                            <button type="cancel" onClick={this.handleClose}>
                              Cancel/Close
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


  // function Avatar({ person, size })