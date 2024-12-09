import React from "react";
import { getDiagnoses, editDiagnosis } from "../client/apiDiagnoses";
import ListForm from "../components/ListForm";

function Diagnoses() {
    const displayLabel = [
        "Diagnosis Name",
        "Description",
        "PatientID"
    ]

    const labels = [
        "diagnosis_name",
        "description",
        "patientID"
    ];

    return (
        <ListForm
            displayLabel={displayLabel}
            labels={labels}
            getRecords={getDiagnoses}
            deleteRecord={editDiagnosis}
            entity={"Diagnoses"}
        />
    );
}

export default Diagnoses;