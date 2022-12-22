import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AppointmentContext = React.createContext();

export const AppointmentConsumer = AppointmentContext.Consumer;

const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([])
  const navigate = useNavigate();
  const [patients, setPatient] = useState([])

  const getAllAppointments = (doctorId) => {
    axios.get(`/api/doctors/${doctorId}/appointments`)
      .then(res => setAppointments(res.data))
      .catch(err => console.log(err))
  }

  const getAllUsers = (doctorId) => {
    // make api call to our custom route -> custom action
    axios.get(`/api/doctors/${doctorId}/avausers`)
      .then(res => setPatient(res.data))
      .catch(err => console.log(err))
  }

  const addAppointment = (doctorId, appointment) => {
    axios.post(`/api/doctors/${doctorId}/appointment`, { appointment })
    .then(res => setAppointments([...appointments, res.data]))
    .catch(err => console.log(err))
  }

  const updateAppointment = (doctorId, id, appointment) => {
    axios.put(`/api/doctors/${doctorId}/appointments/${id}`, { appointment })
      .then( res => {
        const newUpdatedAppointments = appointments.map( e => {
          if (e.id === id) {
            return res.data
          }
          return e
        })
        setAppointments(newUpdatedAppointments)
        navigate(`/doctors/`)
      })
      .catch(err => console.log(err))
  }

  const deleteAppointment = (doctorId, id) => {
    axios.delete(`/api/doctors/${doctorId}/appointments/${id}`)
      .then(res => {
        setAppointments(appointments.filter(e => e.id !== id))
        navigate(`/doctors/`)
      })
      .catch(err => console.log(err))
  }

  return (
    <AppointmentContext.Provider value={{
      appointments,
      users,
      getAllAppointments,
      getAllPatients,
      addAppointment,
      updateAppointment,
      deleteAppointment,
    }}>
      { children }
    </AppointmentContext.Provider>
  )
}

export default AppointmentProvider;