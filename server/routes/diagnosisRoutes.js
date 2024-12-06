// Citation for the following function:
// Date: 11/20/2024
// Adapted from:
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app/blob/main/App/backend/routes/peopleRoutes.js


const express = require("express");
const router = express.Router();
const {
  getDiagnoses,
  getDiagnosisByID,
  createDiagnosis,
  updateDiagnosis,
  deleteDiagnosis,
} = require("../controllers/diagnosisController");

router.get("/", getDiagnoses);
// router.get("/:id", getDiagnosisByID);
router.post("/", createDiagnosis);
router.put("/:id", updateDiagnosis);
router.delete("/:id", deleteDiagnosis);

module.exports = router;
