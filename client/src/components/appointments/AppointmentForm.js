import { useState, useEffect } from "react";
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const AppointmentForm = ({ addAppointment, doctorId }) => {
  const [appointment, setAppointment] = useState({ user_id: 0 })
  const [unAppointed, setUnAppointed] = userState([])

  useEffect( () => {
    axios.get(`/api/doctors/${doctorId}/unAppointed`)
      .then( res => setUnAppointed(res.data) )
      .catch( err => console.log(err) )
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    addAppointment(appointment)
    setAppointment({ role: '', user_id: 0 })
  }

  return (
    <>
      <h1>Add Appointment</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>User</Form.Label>
          <Form.Select 
            aria-label="Default select example"
            name="user"
            value={appointment.user}
            onChange={(e) => setEnrollment({ ...appointment, user_id: e.target.value })}
          >
            <option>Users</option>
            { unAppointed.map((u) => (
              <option value={u.id}>{u.first_name} {u.last_name}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default AppointmentForm;