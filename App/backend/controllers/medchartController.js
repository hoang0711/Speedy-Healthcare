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


const medchartTable = "MedChart";

// Returns all rows of charts in MedChart
const getMedCharts = async (req, res) => {
  try {
    // Select all rows from the "MedChart" table
    const query = `SELECT * FROM ${medchartTable}`;
    // Execute the query using the "db" object from the configuration file
    const [rows] = await db.query(query);
    // Send back the rows to the client
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching medcharts from the database:", error);
    res.status(500).json({ error: "Error fetching medcharts" });
  }
};

// Returns a single chart by their unique ID from MedChart
// const getMedChartByID = async (req, res) => {
//   try {
//     const medchartDetailsID = req.params.id;
//     const query = `SELECT * FROM ${medchartTable} WHERE medchartDetailsID = ?`;
//     const [result] = await db.query(query, [medchartDetailsID]);
// Check if medchart was found
//     if (result.length === 0) {
//       return res.status(404).json({ error: "MedChart not found" });
//    }
//    const medchart = result[0];
//    res.json(medchart);
//  } catch (error) {
//    console.error("Error fetching medchart from the database:", error);
//    res.status(500).json({ error: "Error fetching medchart" });
//  }
// };

// Returns status of creation of new chart in MedChart table
const createMedChart = async (req, res) => {
  try {
    const { physicianID, patientID } = req.body;
    const query =
      `INSERT INTO ${medchartTable} (physicianID, patientID) VALUES (?, ?)`;

    const response = await db.query(query, [
      physicianID,
      patientID,
    ]);
    res.status(201).json(response);
  } catch (error) {
    // Print the error for the dev
    console.error("Error creating MedChart:", error);
    // Inform the client of the error
    res.status(500).json({ error: "Error creating MedChart" });
  }
};


const updateMedChart = async (req, res) => {
  // Get the medchart ID
  const medchartDetailsID = req.params.id;
  // Get the medchart object
  const newMedChart = req.body;

  try {
    const [data] = await db.query(`SELECT * FROM ${medchartTable} WHERE medchartDetailsID = ?`,
      [medchartDetailsID]);

    const oldMedChart = data[0];

    // If any attributes are not equal, perform update
    if (!lodash.isEqual(newMedChart, oldMedChart)) {
      const query =
        `UPDATE ${medchartTable} SET physicianID=?, patientID=? WHERE medchartDetailsID = ?`;

      // Homeoworld is NULL-able FK in bsg_people, has to be valid INT FK ID or NULL
      // const hw = newPerson.homeworld === "" ? null : newPerson.homeworld;

      const values = [
        newMedChart.physicianID,
        newMedChart.patientID,
        medchartDetailsID,
      ];

      // Perform the update
      await db.query(query, values);
      // Inform client of success and return 
      return res.json({ message: "MedChart updated successfully." });
    }

    res.json({ message: "MedChart details are the same, no update" });
  } catch (error) {
    console.log("Error updating MedChart", error);
    res
      .status(500)
      .json({ error: `Error updating the MedChart with id ${medchartDetailsID}` });
  }
};

// Endpoint to delete a medchart from the database
const deleteMedChart = async (req, res) => {
  console.log("Deleting MedChart with id:", req.params.id);
  const medchartDetailsID = req.params.id;

  try {
    // Ensure the chart exitst
    const [isExisting] = await db.query(
      `SELECT 1 FROM ${medchartTable} WHERE medchartDetailsID = ?`,
      [medchartDetailsID]
    );

    // If the chart doesn't exist, return an error
    if (isExisting.length === 0) {
      return res.status(404).send("MedChart not found");
    }



    // Delete the chart from MedChart
    await db.query(`DELETE FROM ${medchartTable} WHERE medchartDetailsID = ?`, [medchartDetailsID]);

    // Return the appropriate status code
    res.status(204).json({ message: "MedChart deleted successfully" })
  } catch (error) {
    console.error("Error deleting MedChart from the database:", error);
    res.status(500).json({ error: error.message });
  }
};

// Export the functions as methods of an object
module.exports = {
  getMedCharts,
  // getMedChartByID,
  createMedChart,
  updateMedChart,
  deleteMedChart,
};
