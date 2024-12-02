import React, { useState } from "react";
import './Form.css';  // Assuming you have styles for your form
import { editPhysician, getPhysicians } from "../client/apiPhysician";
import EditForm from "./EditForm";

function EditPhysicianForm() {
    return (
        <EditForm
            getRecords={getPhysicians}
            entity={"physicians"}
            editRecord={editPhysician}
            defaultValues={{
                physician_name: "",
                specialty: ""
            }}
            attributes={[
                {
                    label: "Physician Name",
                    name: "physician_name",
                    type: "text",
                    required: true
                },
                {
                    label: "Specialty",
                    name: "specialty",
                    type: "select",
                    options: ["Cardiology", "Dermatology", "Pediatrics", "Other"],
                    required: true
                }
            ]}
        />
    );
}

export default EditPhysicianForm;
