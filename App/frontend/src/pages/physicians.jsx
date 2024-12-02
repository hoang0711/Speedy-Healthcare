import React from "react";
import { getPhysicians, deletePhysician } from "../client/apiPhysician";
import ListForm from "../components/ListForm";

function Physicians() {
    const labels = [
        "physician_name",
        "specialty"
    ];

    return (
        <ListForm
            labels={labels}
            getRecords={getPhysicians}
            deleteRecord={deletePhysician}
            entity={"physician"}
        />
    );
}

export default Physicians;