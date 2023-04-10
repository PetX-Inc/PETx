import React, { useState, useEffect, useRef, Component } from 'react';
import { Form, Field } from 'react-final-form';
//import './PopupButton.css';
import "./popup2.css"; // import CSS file with blur-effect class


//import React, { Component } from 'react';
//import { Form, Field } from 'react-final-form';


//import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Form } from 'react-final-form';

class Popup extends Component {
  state = {
    isOpen: false,
    type: '',
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

  render() {
    const { isOpen, type } = this.state;

    return (
      <div className="pop-up-button-wrapper">
        <button className='pop-up-button' onClick={this.openPopUp}>SOS | Doctor</button>
        {isOpen && (
          <div className="pop-up-background">
            <div className="pop-up-content" ref={(node) => (this.popUpRef = node)}>
              <Form
                onSubmit={(values) => {
                  console.log('Form submitted:', values);
                  this.closePopUp();
                }}
                render={({ handleSubmit, form }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <label htmlFor="type">Type:</label>
                      <select id="type" name="type" value={type} onChange={this.handleTypeChange}>
                        <option value="">-- Select type --</option>
                        <option value="doctor">Doctor</option>
                        <option value="sos">SOS</option>
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
                    {type === 'doctor' && (
                      <div className="form-row">
                        <label htmlFor="doctor">Doctor:</label>
                        <select id="doctor" name="doctor">
                          <option value="">-- Select doctor --</option>
                          <option value="Dr. John">Dr. John</option>
                          <option value="Dr. Jane">Dr. Jane</option>
                          <option value="Dr. Mark">Dr. Mark</option>
                        </select>
                      </div>
                    )}
                    {type === 'sos' && (
                      <div className="form-row">
                        <label htmlFor="description">Description:</label>
                        <textarea id="description" name="description" rows="4" cols="50" />
                      </div>
                    )}
                    <div className="form-row form-buttons">
                      <button type="submit">Submit</button>
                      
                      <button type="button" onClick={form.reset}>
                        Reset
                      </button>
                      <button type="button" onClick={this.closePopUp}>
                        Cancel
                      </button>
                    </div>
                  </form>
                )}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

Popup.propTypes = {};

export default Popup;
