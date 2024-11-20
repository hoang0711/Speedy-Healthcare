import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx';
import Physicians from './pages/physicians.jsx';  
import Patients from './pages/patients.jsx';
import MedChart from './pages/medChart.jsx';
import Tests from './pages/tests.jsx';
import Diagnoses from './pages/diagnoses.jsx';
import AddPatientForm from './components/AddPatientForm.jsx';
import EditPatientForm from './components/EditPatientForm.jsx';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/physicians" element={<Physicians />} />
    <Route path="/patients" element={<Patients />} />
    <Route path="/medchart" element={<MedChart />} />
    <Route path="/tests" element={<Tests />} />
    <Route path="/diagnoses" element={<Diagnoses />} />
    <Route path="/add-patient" element={<AddPatientForm />} />
    <Route path="/edit-patient/:id" element={<EditPatientForm />} />
  </Routes>
);

export default App;



