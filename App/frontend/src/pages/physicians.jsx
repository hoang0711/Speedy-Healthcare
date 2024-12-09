import React from "react";
import { getPhysicians, deletePhysician } from "../client/apiPhysician";
import ListForm from "../components/ListForm";

function Physicians() {
    const displayLabel = [
        "Physician Name",
        "Specialty"
    ]

    const labels = [
        "physician_name",
        "specialty"
    ];

    return (
        <ListForm
            displayLabel={displayLabel}
            labels={labels}
            getRecords={getPhysicians}
            deleteRecord={deletePhysician}
            entity={"Physician"}
        />
    );
}

export default Physicians;