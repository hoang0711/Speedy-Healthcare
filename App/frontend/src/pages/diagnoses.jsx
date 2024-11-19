import React from "react";
import './style.css'; 

function Diagnoses() {
    return (
        <section className="common-container">
            <header>
                <h1>Manage Diagnoses</h1>
                <nav>
                    <a href="/">Home</a> | <a href="/physicians">Physicians</a> |{" "}
                    <a href="/patients">Patients</a> | <a href="/medchart">MedChart</a> |{" "}
                    <a href="/tests">Tests</a>
                </nav>
            </header>
            <div className="common-actions">
                <button>Add New Diagnosis</button>
            </div>
            <table className="common-table">
                <thead>
                    <tr>
                        <th>Actions</th>
                        <th>Diagnosis ID</th>
                        <th>Diagnosis Name</th>
                        <th>Description</th>
                        <th>Patient ID</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Placeholder rows */}
                    <tr>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                        <td>201</td>
                        <td>Pericarditis</td>
                        <td>Inflammation of the pericardium</td>
                        <td>101</td>
                    </tr>
                    <tr>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                        <td>202</td>
                        <td>Bronchitis</td>
                        <td>Inflammation of the lungs</td>
                        <td>102</td>
                    </tr>
                </tbody>
            </table>
            <div className="trademark">SpeedyMD™</div> 
        </section>
    );
}

export default Diagnoses;
