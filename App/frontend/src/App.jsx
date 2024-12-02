import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx';
import Physicians from './pages/physicians.jsx';
import Patients from './pages/patients.jsx';
import MedCharts from './pages/medCharts.jsx';
import Tests from './pages/tests.jsx';
import Diagnoses from './pages/diagnoses.jsx';
import AddPatientForm from './components/AddPatientForm.jsx';
import EditPatientForm from './components/EditPatientForm.jsx';
import AddPhysicianForm from './components/AddPhysicianForm.jsx';
import EditPhysicianForm from './components/EditPhysicianForm.jsx';
import AddMedchartForm from './components/AddMedchartForm.jsx';
import EditMedchartForm from './components/EditMedchartForm.jsx';
import AddDiagnosesForm from './components/AddDiagnosesForm.jsx';
import EditDiagnosesForm from './components/EditDiagnosesForm.jsx';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/physicians" element={<Physicians />} />
    <Route path="/patients" element={<Patients />} />
    <Route path="/medcharts" element={<MedCharts />} />
    <Route path="/tests" element={<Tests />} />
    <Route path="/diagnoses" element={<Diagnoses />} />
    <Route path="/add-patient" element={<AddPatientForm />} />
    <Route path="/edit-patient/:id" element={<EditPatientForm />} />
    <Route path="/add-physician" element={<AddPhysicianForm />} />
    <Route path="/edit-physician/:id" element={<EditPhysicianForm />} />
    <Route path="/add-medchart" element={<AddMedchartForm />} />
    <Route path="/edit-medchart/:id" element={<EditMedchartForm />} />
    <Route path="/add-diagnoses" element={<AddDiagnosesForm />} />
    <Route path="/edit-diagnoses/:id" element={<EditDiagnosesForm />} />
  </Routes>
);

export default App;



