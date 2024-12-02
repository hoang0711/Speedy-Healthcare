// Citation for the following function:
// Date: 11/20/2024
// Adapted from:
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app/blob/main/App/backend/controllers/peopleController.js


// Load db config
const db = require("../database/config");
// Load .env variables
require("dotenv").config();
// Util to deep-compare two objects
const lodash = require("lodash");


const diagnosisTable = "Diagnoses";
// const intersectionTable = "MedChart";

// Returns all rows of diagnoses in Diagnoses
const getDiagnoses = async (req, res) => {
  try {
    // Select all rows from the "Diagnoses" table
    const query = `SELECT * FROM ${diagnosisTable}`;
    // Execute the query using the "db" object from the configuration file
    const [rows] = await db.query(query);
    // Send back the rows to the client
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching patients from the database:", error);
    res.status(500).json({ error: "Error fetching diagnoses" });
  }
};

// Returns a single diagnosis by their unique ID from Diagnoses
// const getDiagnosisByID = async (req, res) => {
//   try {
//     const diagnosisID = req.params.id;
//     const query = `SELECT * FROM ${diagnosisTable} WHERE diagnosisID = ?`;
//     const [result] = await db.query(query, [diagnosisID]);
// Check if diagnosis was found
//     if (result.length === 0) {
//       return res.status(404).json({ error: "Diagnosis not found" });
//    }
//    const diagnosis = result[0];
//    res.json(diagnosis);
//  } catch (error) {
//    console.error("Error fetching diagnosis from the database:", error);
//    res.status(500).json({ error: "Error fetching diagnosis" });
//  }
// };

// Returns status of creation of new diagnosis in Diagnoses table
const createDiagnosis = async (req, res) => {
  try {
    const { diagnosis_name, description, patientID } = req.body;
    const query =
      `INSERT INTO ${diagnosisTable} (diagnosis_name, description, patientID) VALUES (?, ?, ?)`;

    const response = await db.query(query, [
      diagnosis_name,
      description,
      patientID,
    ]);
    res.status(201).json(response);
  } catch (error) {
    // Print the error for the dev
    console.error("Error creating diagnosis:", error);
    // Inform the client of the error
    res.status(500).json({ error: "Error creating diagnosis" });
  }
};


const updateDiagnosis = async (req, res) => {
  // Get the diagnosis ID
  const diagnosisID = req.params.id;
  // Get the diagnosis object
  const newDiagnosis = req.body;

  try {
    const [data] = await db.query(`SELECT * FROM ${diagnosisTable} WHERE diagnosisID = ?`,
      [diagnosisID]);

    const oldDiagnosis = data[0];

    // If any attributes are not equal, perform update
    if (!lodash.isEqual(newDiagnosis, oldDiagnosis)) {
      const query =
        `UPDATE ${diagnosisTable} SET diagnosis_name=?, description=?, patientID=? WHERE diagnosisID = ?`;

      // Homeoworld is NULL-able FK in bsg_people, has to be valid INT FK ID or NULL
      // const hw = newPerson.homeworld === "" ? null : newPerson.homeworld;

      const values = [
        newDiagnosis.diagnosis_name,
        newDiagnosis.description,
        newDiagnosis.patientID,
        diagnosisID,
      ];

      // Perform the update
      await db.query(query, values);
      // Inform client of success and return 
      return res.json({ message: "Diagnosis updated successfully." });
    }

    res.json({ message: "Diagnosis details are the same, no update" });
  } catch (error) {
    console.log("Error updating diagnosis", error);
    res
      .status(500)
      .json({ error: `Error updating the diagnosis with id ${diagnosisID}` });
  }
};

// Endpoint to delete a diagnosis from the database
const deleteDiagnosis = async (req, res) => {
  console.log("Deleting diagnosis with id:", req.params.id);
  const diagnosisID = req.params.id;

  try {
    // Ensure the diagnosis exitst
    const [isExisting] = await db.query(
      `SELECT 1 FROM ${diagnosisTable} WHERE diagnosisID = ?`,
      [diagnosisID]
    );

    // If the diagnosis doesn't exist, return an error
    if (isExisting.length === 0) {
      return res.status(404).send("Diagnosis not found");
    }



    // Delete the diagnosis from Diagnoses
    await db.query(`DELETE FROM ${diagnosisTable} WHERE diagnosisID = ?`, [diagnosisID]);

    // Return the appropriate status code
    res.status(204).json({ message: "Diagnosis deleted successfully" })
  } catch (error) {
    console.error("Error deleting diagnosis from the database:", error);
    res.status(500).json({ error: error.message });
  }
};

// Export the functions as methods of an object
module.exports = {
  getDiagnoses,
  // getDiagnosisByID,
  createDiagnosis,
  updateDiagnosis,
  deleteDiagnosis,
};
