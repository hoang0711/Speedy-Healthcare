import React, { useState } from "react";
import './Form.css';  // Assuming you have styles for your form
import { createDiagnosis } from "../client/apiDiagnoses";
import AddForm from "./AddForm";

function AddDiagnosesForm() {
    return (
        <AddForm
            entity={"diagnoses"}
            createRecord={createDiagnosis}
            defaultValues={{
                diagnosis_name: "",
                description: "",
                patientID: ""
            }}
            attributes={[
                {
                    label: "Diagnosis Name",
                    name: "diagnosis_name",
                    type: "text",
                    required: true
                },
                {
                    label: "Description",
                    name: "description",
                    type: "text",
                    required: true
                },
                {
                    label: "PatientID",
                    name: "patientID",
                    type: "text",
                    required: true
                }
            ]}
        />
    );
}

export default AddDiagnosesForm;