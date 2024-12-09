import React from "react";
import { getMedcharts, deleteMedchart } from "../client/apiMedchart";
import ListForm from "../components/ListForm";

function Medcharts() {
    const displayLabel = [
        "MedchartID",
        "PhysicianID",
        "PatientID"
    ]

    const labels = [
        "medchartDetailsID",
        "physicianID",
        "patientID"
    ];

    return (
        <ListForm
            displayLabel={displayLabel}
            labels={labels}
            getRecords={getMedcharts}
            deleteRecord={deleteMedchart}
            entity={"Medchart"}
        />
    );
}

export default Medcharts;