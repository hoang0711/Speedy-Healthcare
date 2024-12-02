import React, { useState } from "react";
import './Form.css';  // Assuming you have styles for your form
import { createPatient } from "../client/apiPatient";
import AddForm from "./AddForm";

function AddPatientForm() {
    return (
        <AddForm
            entity={"patient"}
            createRecord={createPatient}
            defaultValues={{
                patient_name: "",
                date_of_birth: "",
                gender: "",
                admitted_date: "",
                discharged_date: ""
            }}
            attributes={[
                {
                    label: "Patient Name",
                    name: "patient_name",
                    type: "text",
                    required: true
                },
                {
                    label: "Date of Birth",
                    name: "date_of_birth",
                    type: "date",
                    required: true
                },
                {
                    label: "Gender",
                    name: "gender",
                    type: "select",
                    options: ["M", "F", "Other"],
                    required: true
                },
                {
                    label: "Admitted Date",
                    name: "admitted_date",
                    type: "date",
                },
                {
                    label: "Discharged Date",
                    name: "discharged_date",
                    type: "date",
                }
            ]}
        />
    );
}

export default AddPatientForm;

