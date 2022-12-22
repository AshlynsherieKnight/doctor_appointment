import { useParams } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, Image, Modal } from 'react-bootstrap';
import DoctorList from "../doctors/DoctorList";
import { PatientConsumer } from "../../providers/UserProvider";
import PatientForm from "./PatientForm";

const PatientShow = ({ deletePatient }) => {
  const { id } = useParams()
  const [patient, setUser] = useState({ first_name: '', last_name: '', dob: '' })
  const [doctors, setDoctors] = useState([])
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/users/${id}`)
      .then(res => setUser({...res.data}))
      .catch( err => console.log(err))

    axios.get(`/api/${id}/userdoctors`)
      .then(res => setDoctors(res.data))
      .catch( err => console.log(err))
  }, [])

  const { first_name, last_name, dob } = patient
  return (
    <>
      <h1>{first_name} {last_name}</h1>
      <Button variant="warning" onClick={() => setEdit(true)}>
        Edit
      </Button>

      <Modal show={editing} onHide={() => setEdit(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update patient</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserForm
            id={id}
            first_name={first_name}
            last_name={last_name}
            dob={dob}
            setEdit={setEdit}
          />
        </Modal.Body>
      </Modal>
      <Button onClick={() => deletePatient(id)}>
        Delete
      </Button>
      <br />
      <br />
      <br />
      <h1>All Doctors scheduled busy</h1>
      { doctors.length > 0 ?
        <DoctorList doctors={doctors} />
        : <p>Not with any doctors</p>
      }
    </>
  )
}

const ConnnectedPatientShow = (props) => (
  <UserConsumer>
    { value =Patient {...props} {...value} />}
  </UserConsumer>
)

export default ConnnectedPatientShow;