import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import './style.css';

function ListForm({ labels, getRecords, deleteRecord, entity }) {
    const [records, setRecords] = useState([]);
    const location = useLocation();

    // call get records API to update records' state
    useEffect(() => {
        setTimeout(() => getRecords().then(response => {
            setRecords(response);
        }), 500);
    }, [location])

    const handleDeleteClick = (id) => {
        setRecords(records.filter(record => Object.values(record)[0] !== id));
        deleteRecord(id);
    };

    return (
        <section className="common-container">
            <header>
                <h1>{entity} Records</h1>
                <nav>
                    <a href="/">Home</a> | <a href="/physicians">Physicians</a> |{" "}
                    <a href="/patients">Patients</a> | <a href="/diagnoses">Diagnoses</a> |{" "}
                    <a href="/tests">Tests</a> | <a href="/medChart">MedChart</a>
                </nav>
            </header>
            <div className="common-actions">
                {/* Link to AddForm page */}
                <Link to={`/add-${entity}`}>
                    <button>Add {entity}</button>
                </Link>
            </div>

            <table className="common-table">
                <thead>
                    <tr>
                        {labels.map(label => <th>{label}</th>)}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((record) => (
                        <tr key={Object.values(record)[0]}>
                            {labels.map(label => <td>{record[label]}</td>)}
                            <td>
                                {/* Link to EditForm page for a specific record */}
                                <Link to={`/edit-${entity}/${Object.values(record)[0]}`}>
                                    <button>Edit</button>
                                </Link>
                                <button onClick={() => handleDeleteClick(Object.values(record)[0])}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="trademark">SpeedyMD™</div>
        </section>
    );
}

export default ListForm;
