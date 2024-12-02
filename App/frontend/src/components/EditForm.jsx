import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";  // Get record ID from the URL
import './Form.css';
import { useNavigate } from "react-router-dom";

function EditForm({ defaultValues, attributes, editRecord, entity, getRecords }) {
    const navigate = useNavigate();
    const { id } = useParams();  // Get record ID from the URL
    const [editedRecord, setEditedRecord] = useState(defaultValues);

    useEffect(() => {
        getRecords().then(response => {
            const foundRecord = response.find((record) => Number(Object.values(record)[0]) === Number(id));
            setEditedRecord(foundRecord);
        })
    }, [id])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedRecord({ ...editedRecord, [name]: value });
    };

    const isInvalidRecord = () => {
        return attributes.some(attribute => (attribute.required && !editedRecord[attribute.name]));
    }

    const saveRecordChange = (e) => {
        e.preventDefault();
        if (isInvalidRecord()) {
            alert("Please fill in all required fields.");
            return;
        }
        editRecord(editedRecord);  // Call the editRecord function to update the record's data

        navigate(`/${entity}`);
    };

    return (
        <form className="common-form" onSubmit={saveRecordChange}>
            {attributes.map(attribute => (
                <>
                    <label>{attribute.label}:</label>
                    {(attribute.type === "text" || attribute.type === "date") && (
                        <input
                            type={attribute.type}
                            name={attribute.name}
                            value={editedRecord[attribute.name]}
                            onChange={handleInputChange}
                            required={attribute.required}
                        />
                    )}
                    {attribute.type === "select" && (
                        <select
                            name={attribute.name}
                            value={editedRecord[attribute.name]}
                            onChange={handleInputChange}
                            required={attribute.required}
                        >
                            <option value="">Select</option>
                            {attribute.options.map(option =>
                                <option value={option}>{option}</option>
                            )}
                        </select>
                    )}
                </>
            ))}
            <br />
            <button type="submit">Save Changes</button>
        </form>
    );
}

export default EditForm;


