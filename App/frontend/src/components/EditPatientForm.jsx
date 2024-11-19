import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";  // Get patient ID from the URL
import './Form.css';
import { editPatient, getPatients } from "../client/mockAPI";

function EditPatientForm() {
    const { id } = useParams();  // Get patient ID from the URL
    const [editedPatient, setEditedPatient] = useState({
        id: "",
        name: "",
        dateBirth: "",
        gender: "",
        admittedDate: "",
        dischargedDate: ""
    });

    useEffect(() => {
        getPatients().then(response => {
            const foundPatient = response.find((patient) => Number(patient.id) === Number(id));
            setEditedPatient(foundPatient);
        })
    },[id])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedPatient({ ...editedPatient, [name]: value });
    };

    const savePatientChanges = (e) => {
        e.preventDefault();
        if (!editedPatient.name || !editedPatient.dateBirth || !editedPatient.gender) {
            alert("Please fill in all required fields.");
            return;
        }
        editPatient(editedPatient);  // Call the editPatient function to update the patient's data
    };

    return (
        <form className="common-form" onSubmit={savePatientChanges}>
            <label>Name:</label>
            <input
                type="text"
                name="name"
                value={editedPatient.name}
                onChange={handleInputChange}
                required
            />
            <label>Date of Birth:</label>
            <input
                type="date"
                name="dateBirth"
                value={editedPatient.dateBirth}
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
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <label>Admitted Date:</label>
            <input
                type="date"
                name="admittedDate"
                value={editedPatient.admittedDate}
                onChange={handleInputChange}
            />
            <label>Discharged Date:</label>
            <input
                type="date"
                name="dischargedDate"
                value={editedPatient.dischargedDate}
                onChange={handleInputChange}
            />
            <button type="submit">Save Changes</button>
        </form>
    );
}

export default EditPatientForm;


