import axios from 'axios';
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import './Doctors.css'


const DoctorForm = ({ addDoctor }) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [fee, setFee] = useState('');


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newDoctor = {
      // img: require('../../images/pics/products/docF.png'),
      // alt: 'Doctor 1',
      name,
      fee,
      email,
    };
    addDoctor(newDoctor);

    const res = await axios.post("http://localhost:8080/api/doctors/createDoctor", newDoctor);
    console.log(res)
    if(res.status === 201){
      alert("Doctor Added")
    }
    else{
      alert("Email already registered")
    }

    handleClose();
  };

  return (
    <>
        <div className='text-center m-3'>
            <Button variant="primary" className='adddocform' onClick={handleShow}>
                Add new Doctor
            </Button>
        </div>
     
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Doctor Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Doctor Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" value={name} onChange={(event) => setName(event.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicFee">
              <Form.Label>Fee</Form.Label>
              <Form.Control type="text" placeholder="Enter your fee" value={fee} onChange={(event) => setFee(event.target.value)} />
            </Form.Group>
            
              <Button variant="primary" type="submit" className='adddocform' onClick={handleSubmit}>
                Submit
              </Button>
          
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DoctorForm;