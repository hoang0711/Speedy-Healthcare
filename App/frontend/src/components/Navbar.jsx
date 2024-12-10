import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/physicians">Physicians</Link></li>
      <li><Link to="/patients">Patients</Link></li>
      <li><Link to="/medchart">MedChart</Link></li>
      <li><Link to="/tests">Tests</Link></li>
    </ul>
  </nav>
);

export default Navbar;
