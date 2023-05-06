import React, { useState } from 'react';
import Doctor from '../../comps/doctors/Doctor';
import DoctorForm from '../../comps/doctors/DoctorForm';
import {doctors} from '../../comps/helpers/Data'


import { MetaObjects } from '../../comps/helpers/Data';
import MetaDecorator from '../../comps/MetaDecorator/MetaDecorator';


const Doctors = () => {
  //this is the problem by Mohsin
const [doctors1, setDoctors] = useState([]);

const handleAddDoctor = (newDoctor) => {
  setDoctors([...doctors, newDoctor]);
};

  let MetaObject = MetaObjects.filter((obj) => obj.For === 'Doctors')[0];

  return (
    <div className="_body">
      <MetaDecorator obj={MetaObject} />
      <Doctor doctors={doctors} />
      <DoctorForm addDoctor={handleAddDoctor} />
    </div>
  );
};

export default Doctors;
