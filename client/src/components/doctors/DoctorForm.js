import { useState } from "react";
import { Form, Button } from 'react-bootstrap';

const DoctorForm = ({ addDoctor }) => {
  const [doctor, setDoctor] = useState({ doctor_fname: '', doctor_lname: '', specialty: '' })
    
  const handleSubmit = (e) => {
    e.preventDefault()
    addDoctor(doctor)
    setDoctor({ doctor_fname: '', doctor_lname: '', specialty: '' })
  }

  return (
    <>
      <h1>Add Doctor</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Doctor First name</Form.Label>
          <Form.Control 
            name="doctor_fname"
            value={doctor.doctor_fname}
            onChange={(e) => setDoctor({ ...doctor, doctor_fname: e.target.value })}
            // type="text" 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Doctor Last name</Form.Label>
          <Form.Control 
            // as="textarea" 
            // rows={3} 
            name="doctor_lname"
            value={doctor.doctor_lname}
            onChange={(e) => setDoctor({ ...doctor, doctor_lname: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Specialty</Form.Label>
          <Form.Select 
            // aria-label="Default select example"
            name="specialty"
            value={doctor.specialty}
            onChange={(e) => setDoctor({ ...doctor, specialty: e.target.value })}
          >
            <option>Select a Specialty</option>
            <option value="OBGYN">OBGYN</option>
            <option value="Emergency Medicine">Emergency Medicine</option>
            <option value="ENT">ENT</option>
            <option value="Dermatology">Dermatology</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default DoctorForm;