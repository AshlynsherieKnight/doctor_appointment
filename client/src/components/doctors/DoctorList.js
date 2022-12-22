import { Link } from 'react-router-dom';

const DoctorList = ({ doctors }) => (
  <>
    <h1>Doctors</h1>
    <h2>{ doctors.length <= 0 ? "No Doctors" : "" }</h2> 
    { doctors.map( c => 
      <Link to={`/doctors/${c.id}`}>{c.doctor_fname} {c.doctor_lname}</Link>
    )}
  </>
)


export default DoctorList;