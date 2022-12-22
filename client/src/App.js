
import { Routes, Route } from 'react-router-dom';
import home from './components/shared/home';
import Nomatch from './components/shared/Nomatch';
import Doctors from './components/doctors/Doctors';
import doctorShow from './components/doctors/DoctorShow';
import MainNavbar from './components/shared/MainNavbar';
import Patients from './components/patient/Patients';
import PatientShow from './components/patients/PatientsShow';
import Appointments from './components/appointments/Appointments';

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/doctors/:id' element={<DoctorShow />} />
      <Route path='/patients' element={<Patients />} />
      <Route path='/patients/:id' element={<PatientShow />} />
      <Route path='/:doctorId/appointments' element={<Appointments />} />
      <Route path='/*' element={<Nomatch />} />
    </Routes>
  </>
)

export default App;