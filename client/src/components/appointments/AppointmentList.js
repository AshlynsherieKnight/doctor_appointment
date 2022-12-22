import Appointment from './Appointment';

const AppointmentList = ({ appointments, appointed }) => (
  <>
    <h1>All Appointments</h1>
    { appointments.map( a => 
      <Appointment 
        key={a.id}
        {...a}
        appointed={appointed}
      />
    )}  
  </>
)


export default AppointmentList;