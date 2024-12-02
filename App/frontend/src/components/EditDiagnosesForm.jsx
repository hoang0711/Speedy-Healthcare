import React, { useState } from "react";
import './Form.css';  // Assuming you have styles for your form
import { editDiagnosis, getDiagnoses } from "../client/apiDiagnoses";
import EditForm from "./EditForm";

function EditDiagnosesForm() {
    return (
        <EditForm
            getRecords={getDiagnoses}
            entity={"diagnoses"}
            editRecord={editDiagnosis}
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

export default EditDiagnosesForm;