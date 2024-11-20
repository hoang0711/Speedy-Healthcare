import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPatients } from "../client/mockAPI";
import './style.css';

function Patients() {
    const [patients, setPatients] = useState([]);

    // call get patients API to update patients' state
    useEffect(() => {
        getPatients().then(response => {
            setPatients(response);
        })
    }, [])

    const handleDeleteClick = (patientId) => {
        setPatients(patients.filter(patient => patient.id !== patientId));
    };

    return (
        <section className="common-container">
            <header>
                <h1>Patient Records</h1>
                <nav>
                    <a href="/">Home</a> | <a href="/physicians">Physicians</a> |{" "}
                    <a href="/patients">Patients</a> | <a href="/diagnoses">Diagnoses</a> |{" "}
                    <a href="/tests">Tests</a>
                </nav>
            </header>
            <div className="common-actions">
                {/* Link to AddPatientForm page */}
                <Link to="/add-patient">
                    <button>Add Patient</button>
                </Link>
            </div>

            <table className="common-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Admitted Date</th>
                        <th>Discharged Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient) => (
                        <tr key={patient.id}>
                            <td>{patient.name}</td>
                            <td>{patient.gender}</td>
                            <td>{patient.admittedDate}</td>
                            <td>{patient.dischargedDate}</td>
                            <td>
                                {/* Link to EditPatientForm page for a specific patient */}
                                <Link to={`/edit-patient/${patient.id}`}>
                                    <button>Edit</button>
                                </Link>
                                <button onClick={() => handleDeleteClick(patient.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default Patients;
