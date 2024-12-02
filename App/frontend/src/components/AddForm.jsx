import React, { useState } from "react";
import './Form.css';  // Assuming you have styles for your form
import { useNavigate } from "react-router-dom";

function AddForm({ createRecord, defaultValues, attributes, entity }) {
    const navigate = useNavigate();

    const [newRecord, setNewRecord] = useState(defaultValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewRecord({ ...newRecord, [name]: value });
    };

    const isInvalidRecord = () => {
        return attributes.some(attribute => (attribute.required && !newRecord[attribute.name]));
    }

    const addNewRecord = (e) => {
        e.preventDefault();

        // call create record API
        if (isInvalidRecord()) {
            alert("Please fill in all required fields.");
            return;
        }
        createRecord(newRecord);
        setNewRecord(defaultValues);

        navigate(`/${entity}`);
    };

    return (
        <form className="common-form" onSubmit={addNewRecord}>
            {attributes.map(attribute => (
                <>
                    <label>{attribute.label}:</label>
                    {(attribute.type === "text" || attribute.type === "date") && (
                        <input
                            type={attribute.type}
                            name={attribute.name}
                            value={newRecord[attribute.name]}
                            onChange={handleInputChange}
                            required={attribute.required}
                        />
                    )}
                    {attribute.type === "select" && (
                        <select
                            name={attribute.name}
                            value={newRecord[attribute.name]}
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
            <button type="submit">Add {entity}</button>
        </form>
    );
}

export default AddForm;

