import React, { useEffect, useState } from 'react';
import Doctor from '../../comps/doctors/Doctor';
import DoctorForm from '../../comps/doctors/DoctorForm';

import { MetaObjects } from '../../comps/helpers/Data';
import MetaDecorator from '../../comps/MetaDecorator/MetaDecorator';
import axios from 'axios';


const Doctors = () => {
  //this is the problem by Mohsin
const [doctors, setDoctors] = useState([]);

useEffect(() => {
  axios.get('http://localhost:8080/api/doctors/getAllDoctors')
    .then(response => {
      setDoctors(response.data);
      console.log(response.data)
    })
    .catch(error => {
      console.log(error);
    });
}, []);

const handleAddDoctor = (newDoctor) => {
  setDoctors([...doctors, newDoctor]);
};

  let MetaObject = MetaObjects.filter((obj) => obj.For === 'Doctors')[0];

  return (
    <>
    <div className="_body">
      <MetaDecorator obj={MetaObject} />
      <Doctor doctors={doctors} />
      <DoctorForm addDoctor={handleAddDoctor} />
    </div>
    </>

  );
};

export default Doctors;
