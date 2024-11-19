import React from "react";
import './style.css'; 

function MedChart() {
    return (
        <section className="common-container">
            <header>
                <h1>Physician-Patient Relationships</h1>
                <nav>
                    <a href="/">Home</a> | <a href="/physicians">Physicians</a> |{" "}
                    <a href="/patients">Patients</a> | <a href="/diagnoses">Diagnoses</a> |{" "}
                    <a href="/tests">Tests</a>
                </nav>
            </header>
            <div className="common-actions">
                <button>Add New Relationship</button>
            </div>
            <table className="common-table">
                <thead>
                    <tr>
                        <th>Actions</th>
                        <th>MedChart ID</th>
                        <th>Physician ID</th>
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
                        <td>601</td>
                        <td>1</td>
                        <td>101</td>
                    </tr>
                    <tr>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                        <td>602</td>
                        <td>3</td>
                        <td>102</td>
                    </tr>
                </tbody>
            </table>
            <div className="trademark">SpeedyMD™</div> 
        </section>
    );
}

export default MedChart;
