
import React from "react";
import { getPatients, deletePatient } from "../client/patientAPI";
import ListForm from "../components/ListForm";

function Patients() {
    const labels = [
        "patient_name",
        "date_of_birth",
        "gender",
        "admitted_date",
        "discharged_date"
    ];

    return (
        <ListForm
            labels={labels}
            getRecords={getPatients}
            deleteRecord={deletePatient}
            entity={"patient"}
        />
    );
}

export default Patients;
