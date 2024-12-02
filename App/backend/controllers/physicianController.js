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


const entityTable = "Physicians";
const intersectionTable = "MedChart";
const testTable = "Tests";

// Returns all rows of physicians in Physicians
const getPhysicians = async (req, res) => {
  try {
    // Select all rows from the "Physicians" table
    const query = `SELECT * FROM ${entityTable}`;
    // Execute the query using the "db" object from the configuration file
    const [rows] = await db.query(query);
    // Send back the rows to the client
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching physicians from the database:", error);
    res.status(500).json({ error: "Error fetching physicians" });
  }
};

// Returns a single physician by their unique ID from Physicians
// const getPhysicianByID = async (req, res) => {
//   try {
//     const physicianID = req.params.id;
//     const query = `SELECT * FROM ${entityTable} WHERE physicianID = ?`;
//     const [result] = await db.query(query, [physicianID]);
// Check if physician was found
//     if (result.length === 0) {
//       return res.status(404).json({ error: "Physician not found" });
//     }
//     const physician = result[0];
//     res.json(physician);
//   } catch (error) {
//     console.error("Error fetching physician from the database:", error);
//     res.status(500).json({ error: "Error fetching physician" });
//   }
// };

// Returns status of creation of new physician in Physicians table
const createPhysician = async (req, res) => {
  try {
    const { physician_name, specialty } = req.body;
    const query =
      `INSERT INTO ${entityTable} (physician_name, specialty) VALUES (?, ?)`;

    const response = await db.query(query, [
      physician_name,
      specialty,
    ]);
    res.status(201).json(response);
  } catch (error) {
    // Print the error for the dev
    console.error("Error creating physician:", error);
    // Inform the client of the error
    res.status(500).json({ error: "Error creating physician" });
  }
};


const updatePhysician = async (req, res) => {
  // Get the physician ID
  const physicianID = req.params.id;
  // Get the physician object
  const newPhysician = req.body;

  try {
    const [data] = await db.query(`SELECT * FROM ${entityTable} WHERE physicianID = ?`,
      [physicianID]);

    const oldPhysician = data[0];

    // If any attributes are not equal, perform update
    if (!lodash.isEqual(newPhysician, oldPhysician)) {
      const query =
        `UPDATE ${entityTable} SET physician_name=?, specialty=? WHERE physicianID=?`;

      // Homeoworld is NULL-able FK in bsg_people, has to be valid INT FK ID or NULL
      // const hw = newPerson.homeworld === "" ? null : newPerson.homeworld;

      const values = [
        newPhysician.physician_name,
        newPhysician.specialty,
        physicianID,
      ];

      // Perform the update
      await db.query(query, values);
      // Inform client of success and return 
      return res.json({ message: "Physician updated successfully." });
    }

    res.json({ message: "Physician details are the same, no update" });
  } catch (error) {
    console.log("Error updating patient", error);
    res
      .status(500)
      .json({ error: `Error updating the physician with id ${physicianID}` });
  }
};

// Endpoint to delete a physician from the database
const deletePhysician = async (req, res) => {
  console.log("Deleting physician with id:", req.params.id);
  const physicianID = req.params.id;

  try {
    // Ensure the physician exitst
    const [isExisting] = await db.query(
      `SELECT 1 FROM ${entityTable} WHERE physicianID = ?`,
      [physicianID]
    );

    // If the physician doesn't exist, return an error
    if (isExisting.length === 0) {
      return res.status(404).send("Physician not found");
    }

    // Delete related records from the intersection table (see FK contraints MedChart)
    const [response1] = await db.query(
      `DELETE FROM ${intersectionTable} WHERE physicianID = ?`,
      [physicianID]
    );

    // Delete related records from the Tests table (physicianID is a FK within Tests)
    const [response2] = await db.query(
      `DELETE FROM ${testTable} WHERE physicianID = ?`,
      [physicianID]
    );

    console.log(
      "Deleted",
      response1.affectedRows,
      "rows from MedChart intersection table"
    );

    console.log(
      "Deleted",
      response2.affectedRows,
      "rows from Tests table"
    );

    // Delete the physician from Physicians
    await db.query(`DELETE FROM ${entityTable} WHERE physicianID = ?`, [physicianID]);

    // Return the appropriate status code
    res.status(204).json({ message: "Physician deleted successfully" })
  } catch (error) {
    console.error("Error deleting physician from the database:", error);
    res.status(500).json({ error: error.message });
  }
};

// Export the functions as methods of an object
module.exports = {
  getPhysicians,
  // getPhysicianByID,
  createPhysician,
  updatePhysician,
  deletePhysician,
};
