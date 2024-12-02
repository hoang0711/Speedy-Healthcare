import React from "react";
import { getMedcharts, deleteMedchart } from "../client/apiMedchart";
import ListForm from "../components/ListForm";

function Medcharts() {
    const labels = [
        "medchartDetailsID",
        "physicianID",
        "patientID"
    ];

    return (
        <ListForm
            labels={labels}
            getRecords={getMedcharts}
            deleteRecord={deleteMedchart}
            entity={"medchart"}
        />
    );
}

export default Medcharts;