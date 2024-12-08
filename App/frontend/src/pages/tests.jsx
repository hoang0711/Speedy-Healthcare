import React from "react";
import { getTests, deleteTest } from "../client/apiTests";
import ListForm from "../components/ListForm";

function Tests() {
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
            labels={labels}
            getRecords={getTests}
            deleteRecord={deleteTest}
            entity={"Test"}
        />
    );
}

export default Tests;
