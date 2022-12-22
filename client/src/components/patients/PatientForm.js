import { useState, useEffect } from "react";
import { Form, Button } from 'react-bootstrap';
import { PatientConsumer } from "../../providers/PatientProvider";


const PatientForm = ({addPatient, setAdd, id, first_name, last_name, dob, updatePatient, setEdit}) => {
  const [patient, setPatient] = useState({ first_name: '', last_name: '', dob: ''})

  useEffect ( () => {
    if (id) {
      setPatient({ first_name, last_name, dob,})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updatePatient(id, Patient)
      setEdit(false)
    } else {
      addPatient(Patient)
      setAdd(false)
    }
    setPatient({ first_name: '', last_name: '', dob: ''})
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First name</Form.Label>
          <Form.Control 
            placeholder="First Name"
            name='first_name'
            value={patient.first_name}
            onChange={(e) => setPatient({ ...patient, first_name: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            placeholder="Last Name" 
            name='last_name'
            value={Patient.last_name}
            onChange={(e) => setPatient({ ...patient, last_name: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date of birth</Form.Label>
          <Form.Control 
            placeholder="DD-MM-YYY"
            name='dob'
            value={patient.dob}
            onChange={(e) => setPatient({ ...patient, dob: e.target.value })}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedPatientForm = (props) => (
  <PatientConsumer>
    { value => <PatientForm {...props} {...value} />}
  </PatientConsumer>
)

export default ConnectedPatientForm;