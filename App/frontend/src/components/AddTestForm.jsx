import React, { useState } from "react";
import './Form.css';  // Assuming you have styles for your form
import { createTest } from "../client/apiTests";
import AddForm from "./AddForm";

function AddTestForm() {
    return (
        <AddForm
            entity={"tests"}
            createRecord={createTest}
            defaultValues={{
                test_name: "",
                test_date: "",
                test_time: "",
                physicianID: "",
                patientID: "",
                result: ""
            }}
            attributes={[
                {
                    label: "Test Name",
                    name: "test_name",
                    type: "text",
                    required: true
                },
                {
                    label: "Test Date",
                    name: "test_date",
                    type: "date",
                    required: true
                },
                {
                    label: "Test Time",
                    name: "test_time",
                    type: "time",
                    required: true
                },
                {
                    label: "Physician ID",
                    name: "physicianID",
                    type: "text",
                },
                {
                    label: "Pantient ID",
                    name: "patientID",
                    type: "text",
                    required: true
                },
                {
                    label: "Result",
                    name: "result",
                    type: "text",
                    required: true
                }
            ]}
        />
    );
}

export default AddTestForm;

