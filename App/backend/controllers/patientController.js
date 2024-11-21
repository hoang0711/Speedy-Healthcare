
// Load db config
const db = require("../database/config");
// Load .env variables
require("dotenv").config();
// Util to deep-compare two objects
const lodash = require("lodash");


const entityTable = "Patients";
const intersectionTable = "MedChart";

// Returns all rows of patients in Patients
const getPatients = async (req, res) => {
  try {
    // Select all rows from the "Patients" table
    const query = `SELECT * FROM ${entityTable}`;
    // Execute the query using the "db" object from the configuration file
    const [rows] = await db.query(query);
    // Send back the rows to the client
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching patients from the database:", error);
    res.status(500).json({ error: "Error fetching patients" });
  }
};

// // Returns a single patient by their unique ID from Patients
// const getPatientByID = async (req, res) => {
//   try {
//     const patientID = req.params.id;
//     const query = `SELECT * FROM ${entityTable} WHERE patientID = ?`;
//     const [result] = await db.query(query, [patientID]);
//     // Check if patient was found
//     if (result.length === 0) {
//       return res.status(404).json({ error: "Patient not found" });
//     }
//     const patient = result[0];
//     res.json(patient);
//   } catch (error) {
//     console.error("Error fetching patient from the database:", error);
//     res.status(500).json({ error: "Error fetching patient" });
//   }
// };

// Returns status of creation of new patient in Patients table
const createPatient = async (req, res) => {
  try {
    const { patient_name, date_of_birth, gender, admitted_date, discharged_date } = req.body;
    const query =
      `INSERT INTO ${entityTable} (patient_name, date_of_birth, gender, admitted_date, discharged_date) VALUES (?, ?, ?, ?, ?)`;

    const response = await db.query(query, [
      patient_name,
      date_of_birth,
      gender,
      admitted_date,
      discharged_date,
    ]);
    res.status(201).json(response);
  } catch (error) {
    // Print the error for the dev
    console.error("Error creating patient:", error);
    // Inform the client of the error
    res.status(500).json({ error: "Error creating patient" });
  }
};


const updatePatient = async (req, res) => {
  // Get the patient ID
  const patientID = req.params.id;
  // Get the patient object
  const newPatient = req.body;

  try {
    const [data] = await db.query(`SELECT * FROM ${entityTable} WHERE patientID = ?`,
      [patientID]);

    const oldPatient = data[0];

    // If any attributes are not equal, perform update
    if (!lodash.isEqual(newPatient, oldPatient)) {
      const query =
        `UPDATE ${entityTable} SET patient_name=?, date_of_birth=?, gender=?, admitted_date=?, discharged_date=? WHERE patientID=?`;

      // Homeoworld is NULL-able FK in bsg_people, has to be valid INT FK ID or NULL
      // const hw = newPerson.homeworld === "" ? null : newPerson.homeworld;

      const values = [
        newPatient.patient_name,
        newPatient.date_of_birth,
        newPatient.gender,
        newPatient.admitted_date,
        newPatient.discharged_date,
        patientID,
      ];

      // Perform the update
      await db.query(query, values);
      // Inform client of success and return 
      return res.json({ message: "Patient updated successfully." });
    }

    res.json({ message: "Patient details are the same, no update" });
  } catch (error) {
    console.log("Error updating patient", error);
    res
      .status(500)
      .json({ error: `Error updating the person with id ${patientID}` });
  }
};

// Endpoint to delete a patient from the database
const deletePatient = async (req, res) => {
  console.log("Deleting patient with id:", req.params.id);
  const patientID = req.params.id;

  try {
    // Ensure the patient exitst
    const [isExisting] = await db.query(
      `SELECT 1 FROM ${entityTable} WHERE patientID = ?`,
      [patientID]
    );

    // If the patient doesn't exist, return an error
    if (isExisting.length === 0) {
      return res.status(404).send("Patient not found");
    }

    // Delete related records from the intersection table (see FK contraints MedChart)
    const [response] = await db.query(
      `DELETE FROM ${intersectionTable} WHERE patientID = ?`,
      [patientID]
    );

    console.log(
      "Deleted",
      response.affectedRows,
      "rows from MedChart intersection table"
    );

    // Delete the patient from Patients
    await db.query(`DELETE FROM ${entityTable} WHERE patientID = ?`, [patientID]);

    // Return the appropriate status code
    res.status(204).json({ message: "Patient deleted successfully" })
  } catch (error) {
    console.error("Error deleting patient from the database:", error);
    res.status(500).json({ error: error.message });
  }
};

// Export the functions as methods of an object
module.exports = {
  getPatients,
  // getPatientByID,
  createPatient,
  updatePatient,
  deletePatient,
};
