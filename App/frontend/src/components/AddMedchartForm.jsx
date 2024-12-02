import React, { useState } from "react";
import './Form.css';  // Assuming you have styles for your form
import { createMedchart } from "../client/apiMedchart";
import AddForm from "./AddForm";

function AddMedchartForm() {
    return (
        <AddForm
            entity={"medcharts"}
            createRecord={createMedchart}
            defaultValues={{
                medchartDetailsID: "",
                physicianID: "",
                patientID: ""
            }}
            attributes={[
                {
                    label: "MedchartID",
                    name: "medchartDetailsID",
                    type: "text",
                    required: true
                },
                {
                    label: "PhysicianID",
                    name: "physicianID",
                    type: "text",
                    required: true
                },
                {
                    label: "PatientID",
                    name: "patientID",
                    type: "text",
                    required: true
                }
            ]}
        />
    );
}

export default AddMedchartForm;