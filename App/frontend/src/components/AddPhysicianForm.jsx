import React, { useState } from "react";
import './Form.css';  // Assuming you have styles for your form
import { createPhysician } from "../client/apiPhysician";
import AddForm from "./AddForm";

function AddPhysicianForm() {
    return (
        <AddForm
            entity={"physicians"}
            createRecord={createPhysician}
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

export default AddPhysicianForm;

