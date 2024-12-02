import React from "react";
import { getDiagnoses, editDiagnosis } from "../client/apiDiagnoses";
import ListForm from "../components/ListForm";

function Diagnoses() {
    const labels = [
        "diagnosis_name",
        "description",
        "patientID"
    ];

    return (
        <ListForm
            labels={labels}
            getRecords={getDiagnoses}
            deleteRecord={editDiagnosis}
            entity={"Diagnoses"}
        />
    );
}

export default Diagnoses;