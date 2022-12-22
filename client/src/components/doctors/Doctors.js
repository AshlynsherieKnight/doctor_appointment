import { useState, useEffect } from 'react';
import DoctorList from './DoctorList';
import axios from 'axios';
import DoctorForm from './DoctorForm';

const Doctors = ({}) => {
 const [doctors, setDoctors] = useState([])

 useEffect( () => {
   axios.get('/api/doctors')
     .then( res => setDoctors(res.data) )
     .catch( err => console.log(err) )
 }, [])

 const addDoctor = (doctor) => {
   axios.post('/api/doctors', { doctor })
     .then( res => setDoctors([...doctors, res.data]) )
     .catch( err => console.log(err) )
 }

 return (
    <>
     <DoctorForm addDoctor={addDoctor} />
     <h1>Doctors</h1>
     <DoctorList 
       doctors={doctors}
     />
    </>
  )
}

export default Doctors;