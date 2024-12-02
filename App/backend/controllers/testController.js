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


const testTable = "Tests";
// const intersectionTable = "MedChart";

// Returns all rows of tests in Tests
const getTests = async (req, res) => {
  try {
    // Select all rows from the "Tests" table
    const query = `SELECT * FROM ${testTable}`;
    // Execute the query using the "db" object from the configuration file
    const [rows] = await db.query(query);
    // Send back the rows to the client
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching tests from the database:", error);
    res.status(500).json({ error: "Error fetching tests" });
  }
};

// Returns a single test by their unique ID from Tests
// const getTestByID = async (req, res) => {
//   try {
//     const testID = req.params.id;
//     const query = `SELECT * FROM ${testTable} WHERE testID = ?`;
//     const [result] = await db.query(query, [testID]);
// Check if test was found
//     if (result.length === 0) {
//       return res.status(404).json({ error: "Test not found" });
//    }
//    const test = result[0];
//    res.json(test);
//  } catch (error) {
//    console.error("Error fetching test from the database:", error);
//    res.status(500).json({ error: "Error fetching test" });
//  }
// };

// Returns status of creation of new test in Tests table
const createTest = async (req, res) => {
  try {
    const { test_name, test_date, test_time, physicianID, patientID, result } = req.body;
    const query =
      `INSERT INTO ${testTable} (test_name, test_date, test_time, physicianID, patientID, result) VALUES (?, ?, ?, ?, ?, ?)`;

    const response = await db.query(query, [
      test_name,
      test_date,
      test_time,
      physicianID,
      patientID,
      result,
    ]);
    res.status(201).json(response);
  } catch (error) {
    // Print the error for the dev
    console.error("Error creating test:", error);
    // Inform the client of the error
    res.status(500).json({ error: "Error creating test" });
  }
};


const updateTest = async (req, res) => {
  // Get the test ID
  const testID = req.params.id;
  // Get the test object
  const newTest = req.body;

  try {
    const [data] = await db.query(`SELECT * FROM ${testTable} WHERE testID = ?`,
      [testID]);

    const oldTest = data[0];

    // If any attributes are not equal, perform update
    if (!lodash.isEqual(newTest, oldTest)) {
      const query =
        `UPDATE ${testTable} SET test_name=?, test_date=?, test_time=?, physicianID=?, patientID=?, result=? WHERE testID = ?`;

      // PhysicianID is NULL-able FK in Tests, has to be valid INT FK ID or NULL
      const physician = newTest.physicianID === "" ? null : newTest.physicianID;

      const values = [
        newTest.test_name,
        newTest.test_date,
        newTest.test_time,
        physician,
        newTest.patientID,
        newTest.result,
        testID,
      ];

      // Perform the update
      await db.query(query, values);
      // Inform client of success and return 
      return res.json({ message: "Test updated successfully." });
    }

    res.json({ message: "Test details are the same, no update" });
  } catch (error) {
    console.log("Error updating test", error);
    res
      .status(500)
      .json({ error: `Error updating the test with id ${testID}` });
  }
};

// Endpoint to delete a test from the database
const deleteTest = async (req, res) => {
  console.log("Deleting test with id:", req.params.id);
  const testID = req.params.id;

  try {
    // Ensure the test exitst
    const [isExisting] = await db.query(
      `SELECT 1 FROM ${testTable} WHERE testID = ?`,
      [testID]
    );

    // If the test doesn't exist, return an error
    if (isExisting.length === 0) {
      return res.status(404).send("Test not found");
    }



    // Delete the test from Tests
    await db.query(`DELETE FROM ${testTable} WHERE testID = ?`, [testID]);

    // Return the appropriate status code
    res.status(204).json({ message: "Test deleted successfully" })
  } catch (error) {
    console.error("Error deleting test from the database:", error);
    res.status(500).json({ error: error.message });
  }
};

// Export the functions as methods of an object
module.exports = {
  getTests,
  // getTestByID,
  createTest,
  updateTest,
  deleteTest,
};
