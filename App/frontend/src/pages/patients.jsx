import React from "react";
import { getPatients, deletePatient } from "../client/apiPatient";
import ListForm from "../components/ListForm";

function Patients() {
    const displayLabel = [
        "Patient Name",
        "Date of Birth",
        "Gender",
        "Admitted Date",
        "Discharged Date"
    ]

    const labels = [
        "patient_name",
        "date_of_birth",
        "gender",
        "admitted_date",
        "discharged_date"
    ];

    return (
        <ListForm
            displayLabel={displayLabel}
            labels={labels}
            getRecords={getPatients}
            deleteRecord={deletePatient}
            entity={"Patient"}
        />
    );
}

export default Patients;
