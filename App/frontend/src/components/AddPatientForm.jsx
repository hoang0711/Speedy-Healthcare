import React, { useState } from "react";
import './Form.css';  // Assuming you have styles for your form
import { createPatient } from "../client/apiPatient";
import { useNavigate } from "react-router-dom";

function AddPatientForm() {
    const navigate = useNavigate();

    const [newPatient, setNewPatient] = useState({
        patient_name: "",
        date_of_birth: "",
        gender: "",
        admitted_date: "",
        discharged_date: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPatient({ ...newPatient, [name]: value });
    };

    const addNewPatient = (e) => {
        e.preventDefault();

        // call create patient API
        if (!newPatient.patient_name || !newPatient.date_of_birth || !newPatient.gender) {
            alert("Please fill in all required fields.");
            return;
        }
        createPatient(newPatient);
        setNewPatient({
            patient_name: "",
            date_of_birth: "",
            gender: "",
            admitted_date: "",
            discharged_date: ""
        });

        navigate("/patients");
    };

    return (
        <form className="common-form" onSubmit={addNewPatient}>
            <label>Name:</label>
            <input
                type="text"
                name="patient_name"
                value={newPatient.patient_name}
                onChange={handleInputChange}
                required
            />
            <label>Date of Birth:</label>
            <input
                type="date"
                name="date_of_birth"
                value={newPatient.date_of_birth}
                onChange={handleInputChange}
                required
            />
            <label>Gender:</label>
            <select
                name="gender"
                value={newPatient.gender}
                onChange={handleInputChange}
                required
            >
                <option value="">Select</option>
                <option value="M">M</option>
                <option value="F">F</option>
                <option value="Other">Other</option>
            </select>
            <label>Admitted Date:</label>
            <input
                type="date"
                name="admitted_date"
                value={newPatient.admitted_date}
                onChange={handleInputChange}
            />
            <label>Discharged Date:</label>
            <input
                type="date"
                name="discharged_date"
                value={newPatient.discharged_date}
                onChange={handleInputChange}
            />
            <button type="submit">Add Patient</button>
        </form>
    );
}

export default AddPatientForm;

