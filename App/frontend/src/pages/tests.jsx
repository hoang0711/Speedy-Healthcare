import React from "react";
import { getTests, deleteTest } from "../client/apiTests";
import ListForm from "../components/ListForm";

function Tests() {
    const displayLabel = [
        "Test Name",
        "Test Date",
        "Test Time",
        "PhysicianID",
        "PatientID",
        "Result"
    ]

    const labels = [
        "test_name",
        "test_date",
        "test_time",
        "physicianID",
        "patientID",
        "result"
    ];

    return (
        <ListForm
            displayLabel={displayLabel}
            labels={labels}
            getRecords={getTests}
            deleteRecord={deleteTest}
            entity={"Test"}
        />
    );
}

export default Tests;
