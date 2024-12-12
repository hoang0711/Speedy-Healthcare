// Citation for the following function:
// Date: 11/20/2024
// Adapted from:
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app/blob/main/App/backend/server.js


const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
// const PORT = process.env.PORT || 8500;
const PORT = 3306;

// Middleware:

// If on FLIP, use cors() middleware to allow cross-origin requests from the frontend with your port number:
// EX (local): http://localhost:5173 
// EX (FLIP/classwork) http://flip3.engr.oregonstate.edu:5173
app.use(cors({ credentials: true, origin: "*" }));
app.use(express.json());

// API Routes for backend CRUD:
app.use("/api/patients", require("./routes/patientRoutes"));
app.use("/api/physicians", require("./routes/physicianRoutes"));
app.use("/api/diagnoses", require("./routes/diagnosisRoutes"));
app.use("/api/tests", require("./routes/testRoutes"));
app.use("/api/medcharts", require("./routes/medchartRoutes"));

// Add your Connect DB Activitiy Code Below:
// ...


// ...
// End Connect DB Activity Code.


const os = require("os");
const hostname = os.hostname();

app.listen(PORT, () => {
  // flip server should automatically match whatever server you're on 
  console.log(`Server running:  http://${hostname}:${PORT}/api...`);
});
