import React, { useState } from "react";
import './Form.css';  // Assuming you have styles for your form
import { createPatient } from "../client/apiClient";

function AddPatientForm() {
    const [newPatient, setNewPatient] = useState({
        name: "",
        dateBirth: "",
        gender: "",
        admittedDate: "",
        dischargedDate: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPatient({ ...newPatient, [name]: value });
    };

    const addNewPatient = (e) => {
        e.preventDefault();

        // call create patient API
        if (!newPatient.name || !newPatient.dateBirth || !newPatient.gender) {
            alert("Please fill in all required fields.");
            return;
        }
        createPatient(newPatient);
        setNewPatient({
            name: "",
            dateBirth: "",
            gender: "",
            admittedDate: "",
            dischargedDate: ""
        });
    };

    return (
        <form className="common-form" onSubmit={addNewPatient}>
            <label>Name:</label>
            <input
                type="text"
                name="name"
                value={newPatient.name}
                onChange={handleInputChange}
                required
            />
            <label>Date of Birth:</label>
            <input
                type="date"
                name="dateBirth"
                value={newPatient.dateBirth}
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
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <label>Admitted Date:</label>
            <input
                type="date"
                name="admittedDate"
                value={newPatient.admittedDate}
                onChange={handleInputChange}
            />
            <label>Discharged Date:</label>
            <input
                type="date"
                name="dischargedDate"
                value={newPatient.dischargedDate}
                onChange={handleInputChange}
            />
            <button type="submit">Add Patient</button>
        </form>
    );
}

export default AddPatientForm;

