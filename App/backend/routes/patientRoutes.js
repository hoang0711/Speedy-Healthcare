
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
