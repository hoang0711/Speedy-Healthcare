import React, { useState } from "react";
import './Form.css';  // Assuming you have styles for your form
import { editTest, getTests } from "../client/apiTests";
import EditForm from "./EditForm";

function EditTestForm() {
    return (
        <EditForm
            getRecords={getTests}
            entity={"tests"}
            editRecord={editTest}
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

export default EditTestForm;

