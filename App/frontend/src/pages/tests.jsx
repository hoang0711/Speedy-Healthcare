import React from "react";
import './style.css'; 

function Tests() {
    return (
        <section className="common-container">
            <header>
                <h1>Manage Tests</h1>
                <nav>
                    <a href="/">Home</a> | <a href="/physicians">Physicians</a> |{" "}
                    <a href="/patients">Patients</a> | <a href="/medchart">MedChart</a> |{" "}
                    <a href="/diagnoses">Diagnoses</a>
                </nav>
            </header>
            <div className="common-actions">
                <button>Add New Test</button>
            </div>
            <table className="common-table">
                <thead>
                    <tr>
                        <th>Actions</th>
                        <th>Test ID</th>
                        <th>Test Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Physician ID</th>
                        <th>Patient ID</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Placeholder rows */}
                    <tr>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                        <td>501</td>
                        <td>Immunoglobulin E</td>
                        <td>2024-01-05</td>
                        <td>05:25</td>
                        <td>2</td>
                        <td>101</td>
                        <td>High</td>
                    </tr>
                    <tr>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                        <td>502</td>
                        <td>Troponin</td>
                        <td>2024-03-12</td>
                        <td>10:15</td>
                        <td>1</td>
                        <td>102</td>
                        <td>Normal</td>
                    </tr>
                </tbody>
            </table>
            <div className="trademark">SpeedyMD™</div> 
        </section>
    );
}

export default Tests;
