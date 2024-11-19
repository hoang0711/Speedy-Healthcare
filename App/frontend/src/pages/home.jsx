import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Home = () => {
  return (
    <div className="container">
      <header>
        <h1>SpeedyMD Healthcare Management</h1>
        <p>
          Welcome to the SpeedyMD Healthcare Management System. Use the links below to navigate through the
          different sections.
        </p>
      </header>

      <ul className="link-list">
        <li>
          <Link to="/physicians">Manage Physicians</Link>
        </li>
        <li>
          <Link to="/patients">Manage Patients</Link>
        </li>
        <li>
          <Link to="/medchart">Physician-Patient Relationships</Link>
        </li>
        <li>
          <Link to="/diagnoses">Manage Diagnoses</Link>
        </li>
        <li>
          <Link to="/tests">Manage Tests</Link>
        </li>
      </ul>

      <div className="trademark">SpeedyMD™</div>
    </div>
  );
};

export default Home;
