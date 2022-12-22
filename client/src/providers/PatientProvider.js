import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

const PatientProvider = ({ children }) => {
  const [patient, setPatient] = useState([])
  const navigate = useNavigate()

  useEffect( () => {
    axios.get('/api/users')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }, [])

  const addPatient = (patient) => {
    axios.post('/api/patients', { patients })
      .then(res => setPatients([...patients, res.data]))
      .catch(err => console.log(err))
  }

  const updatePatients = (id, patient) => {
    axios.put(`/api/patients/${id}`, { patient })
      .then( res => {
        const newUpdatedPatients = patient.map( u => {
          if (u.id === id) {
            return res.data
          }
          return u
        })
        setPatients(newUpdatedPatients)
        navigate('/users')
        window.location.reload()
      })
      .catch(err => console.log(err))
  }

  const deletePatient = (id) => {
    axios.delete(`/api/patients/${id}`)
      .then( res => {
        setPatients(patients.filter( u => u.id !== id ))
        navigate('/patients')
        window.location.reload()
      })
      .catch(err => console.log(err))
  }

  return (
    <UserContext.Provider value={{
      patients,
      addPatient,
      updatePatient,
      deletePatient,
    }}>
      { children }
    </UserContext.Provider>
  )
}

export default UserProvider;