import React, { useState } from "react";
import './Form.css';  // Assuming you have styles for your form
import { editMedchart, getMedcharts } from "../client/apiMedchart";
import EditForm from "./EditForm";

function EditMedchartForm() {
    return (
        <EditForm
            getRecords={getMedcharts}
            entity={"medcharts"}
            editRecord={editMedchart}
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

export default EditMedchartForm;