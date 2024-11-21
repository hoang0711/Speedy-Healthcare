import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";  // Get patient ID from the URL
import './Form.css';
import { editPatient, getPatients } from "../client/apiPatient";
import { useNavigate } from "react-router-dom";

function EditPatientForm() {
    const navigate = useNavigate();
    const { id } = useParams();  // Get patient ID from the URL
    const [editedPatient, setEditedPatient] = useState({
        patientID: "",
        patient_name: "",
        date_of_birth: "",
        gender: "",
        admitted_date: "",
        discharged_date: ""
    });

    useEffect(() => {
        getPatients().then(response => {
            const foundPatient = response.find((patient) => Number(patient.patientID) === Number(id));
            setEditedPatient(foundPatient);
        })
    }, [id])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedPatient({ ...editedPatient, [name]: value });
    };

    const savePatientChanges = (e) => {
        e.preventDefault();
        if (!editedPatient.patient_name || !editedPatient.date_of_birth || !editedPatient.gender) {
            alert("Please fill in all required fields.");
            return;
        }
        editPatient(editedPatient);  // Call the editPatient function to update the patient's data

        navigate("/patients");
    };

    return (
        <form className="common-form" onSubmit={savePatientChanges}>
            <label>Name:</label>
            <input
                type="text"
                name="patient_name"
                value={editedPatient.patient_name}
                onChange={handleInputChange}
                required
            />
            <label>Date of Birth:</label>
            <input
                type="date"
                name="date_of_birth"
                value={editedPatient.date_of_birth}
                onChange={handleInputChange}
                required
            />
            <label>Gender:</label>
            <select
                name="gender"
                value={editedPatient.gender}
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
                value={editedPatient.admitted_date}
                onChange={handleInputChange}
            />
            <label>Discharged Date:</label>
            <input
                type="date"
                name="dischargedDate"
                value={editedPatient.discharged_date}
                onChange={handleInputChange}
            />
            <button type="submit">Save Changes</button>
        </form>
    );
}

export default EditPatientForm;


