// Citation for the following function:
// Date: 11/20/2024
// Adapted from:
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app/blob/main/App/backend/routes/peopleRoutes.js


const express = require("express");
const router = express.Router();
const {
  getPatients,
  getPatientByID,
  createPatient,
  updatePatient,
  deletePatient,
} = require("../controllers/patientController");

router.get("/", getPatients);
// router.get("/:id", getPatientByID);
router.post("/", createPatient);
router.put("/:id", updatePatient);
router.delete("/:id", deletePatient);

module.exports = router;
