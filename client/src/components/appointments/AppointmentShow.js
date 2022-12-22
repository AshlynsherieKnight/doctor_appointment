import { Button, ListGroup, Modal } from "react-bootstrap";
import axios from 'axios';
import { useState, useEffect } from 'react';
import AppointmentForm from "./AppointmentForm";
import { AppointmentConsumer } from "../../providers/AppointmentProvider";

const AppointmentShow = ({ user_id, id, doctor_id, deleteAppointment }) => {
  const [user, setUser] = useState({ first_name: '', last_name: '' })
  const [editing, setEdit] = useState(false)
  
  useEffect( () => {
    axios.get(`/api/users/${user_id}`)
      .then(res => setUser(res.data))
      .catch(err => console.log(err))
  }, [])
  
  const { first_name, last_name } = user 

  return (
    <ListGroup.Item>
      <h1>{first_name} {last_name}</h1>
      <Button variant="primary" onClick={() => setEdit(true)}>
        Edit
      </Button>

      <Modal show={editing} onHide={() => setEdit(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Change Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AppointmentForm
            id={id}
            doctor_id={doctor_id}
            user_id={user_id}
            setEdit={setEdit}
          />
        </Modal.Body>
      </Modal>
      <Button onClick={() => deleteAppointment(doctor_id, id)}>
        Delete
      </Button>
    </ListGroup.Item>
  )
}

const ConnectedAppointmentShow = (props) => (
  <AppointmentConsumer>
    { value => <AppointmentShow {...props} {...value} />}
  </AppointmentConsumer>
)

export default ConnectedAppointmentShow;