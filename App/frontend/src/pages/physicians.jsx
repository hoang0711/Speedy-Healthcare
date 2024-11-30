import React from "react";
import './style.css';

function Physicians() {
    return (
        <section className="common-container">
            <header>
                <h1>Physician Records</h1>
                <nav>
                    <a href="/">Home</a> | <a href="/patients">Patients</a> |{" "}
                    <a href="/medchart">MedChart</a> | <a href="/diagnoses">Diagnoses</a> |{" "}
                    <a href="/tests">Tests</a>
                </nav>
            </header>
            <div className="common-actions">
                <button>Add New Physician</button>
            </div>
            <table className="common-table">
                <thead>
                    <tr>
                        <th>Actions</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Specialty</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Placeholder rows */}
                    <tr>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                        <td>1</td>
                        <td>Dr. Placeholder Name</td>
                        <td>Specialty Placeholder</td>
                    </tr>
                </tbody>
            </table>
            <div className="trademark">SpeedyMD™</div>
        </section>
    );
}

export default Physicians;
