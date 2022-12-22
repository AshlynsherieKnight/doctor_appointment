import { useState, useEffect, ListGroup } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Patient = ({}) => {
 const [patient, setPatient] = useState({ first_name: '', last_name: '' })
 const [doctors, setDoctors] = useState([])
 const { patientId } = useParams()

 useEffect( () => {
  axios.get(`/api/patients/${patientId}`)
    .then( res => setPatient(res.data) )
    .catch( err => console.log(err) )
}, [])

useEffect( () => {
  axios.get(`/api/${patientId}/doctors`)
    .then( res => setDoctors(res.data) )
    .catch( err => console.log(err) )
}, [])

const { first_name, last_name } = patient
return (
  <>
   <h1>{first_name} {last_name}</h1>
   <h1>Appointments</h1>
   <ListGroup>
     { doctors.map((c) => (
       <ListGroup.Item>{c.title}</ListGroup.Item>
     ))}
   </ListGroup>
  </>
)
}

export default patient;