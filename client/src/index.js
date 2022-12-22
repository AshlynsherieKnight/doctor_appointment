import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DoctorProvider from './providers/DoctorProvider';
import PatientProvider from './providers/UserPatient';
import AppointmentProvider from './providers/AppointmentProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DoctorProvider>
        <PatientProvider>
          <AppointmentProvider>
            <App />
          </AppointmentProvider>
        </PatientProvider>
      </DoctorProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();